

# AOP


## 什么是AOP（面向切面编程）

一个请求过来，可能会经过 Controller（控制器）、Service（服务）、Repository（数据库访问） 的逻辑：

如果想在这个调用链路里加入一些通用逻辑该怎么加呢？比如日志记录、权限控制、异常处理等。

容易想到的是直接改造 Controller 层代码，加入这段逻辑。

这样可以，但是不优雅，因为这些通用的逻辑侵入到了业务逻辑里面。能不能透明的给这些业务逻辑加上日志、权限等处理呢？

那是不是可以在调用 Controller 之前和之后加入一个执行通用逻辑的阶段呢？

是不是就和切了一刀一样？

这样的横向扩展点就叫做切面，这种透明的加入一些切面逻辑的编程方式就叫做 AOP （面向切面编程）。

**AOP 的好处是可以把一些通用逻辑分离到切面中，保持业务逻辑的纯粹性，这样切面逻辑可以复用，还可以动态的增删。**

而 Nest 实现 AOP 的方式更多，一共有五种，包括 Middleware、Guard、Pipe、Interceptor、ExceptionFilter


## Middleware

nest底层是express，可以使用中间件，区分全局中间件和路由中间件

全局中间件使用use

路由中间在路由module中使用

这个是继承了 Express 的概念

## Guard

Guard是路由守卫，可以用于调用某个Controller之前判断权限，返回true和false决定是否放行

Guard需要实现CanActive接口，CanActive能够拿到context获取请求信息，通过判断权限控制之后返回true和false

通过@Injectable修饰器加到IOC容器中，就可以在某个Controller中使用了

Controller本身不需要修改，却加上了权限判断的逻辑控制，这就是AOP的好处

Guard可以对路由访问进行权限控制，但是不能对请求响应做修改，但是Interceptor可以做到

## Interceptor

Interceptor是拦截器的意思，可以在Controller前后做一些逻辑处理

Interceptor要实现NestInterceptor接口，实现intercept方法，调用 next.handle() 就会调用目标 Controller，可以在之前和之后加入一些处理逻辑。

Controller 之前之后的处理逻辑可能是异步的。Nest 里通过 rxjs 来组织它们，所以可以使用 rxjs 的各种 operator。

Interceptor 支持每个路由单独启用，只作用于某个 controller，也同样支持全局启用，作用于全部 controller

除了路由的权限控制、目标 Controller 之前之后的处理这些都是通用逻辑外，对参数的处理也是一个通用的逻辑，所以 Nest 也抽出了对应的切面，也就是 Pipe


## Pipe

Pipe是管道的意思，用来对参数做一些校验和转换

Pipe 要实现 PipeTransform 接口，实现 transform 方法，里面可以对传入的参数值 value 做参数验证，比如格式、类型是否正确，不正确就抛出异常。也可以做转换，返回转换后的值。

内置的有 9 个 Pipe，从名字就能看出它们的意思：
ValidationPipe
ParseIntPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
DefaultValuePipe
ParseEnumPipe
ParseFloatPipe
ParseFilePipe

同样Pipe可以对某个请求，某个参数生效，也可以对整个路由生效

不管是Pipe还是Guard，Interceptor都是由Controller控制，过程中都可能抛出异常，如何对某种异常做出响应，接下来是ExceptionFilter


## ExceptionFilter

ExceptionFilter可以对各种异常做处理，返回对应响应

首先要实现 ExceptionFilter 接口，实现 catch 方法，就可以拦截异常了，但是要拦截什么异常还需要用 @Catch 装饰器来声明，拦截了异常之后，可以返回对应的响应，给用户更友好的提示。

Nest通过这种方式实现了异常与响应的对应关系，代码里面只要抛出异常，就能返回对应的响应，非常方便

可以选择全局生效和某个路由生效


## 总结
Middleware、Guard、Pipe、Interceptor、ExceptionFilter 都可以透明的添加某种处理逻辑到某个路由或者全部路由，这就是 AOP 的好处。

MVC
IOC
AOP

Nest 基于 express 这种 http 平台做了一层封装，应用了 MVC、IOC、AOP 等架构思想。

MVC 就是 Model、View Controller 的划分，请求先经过 Controller，然后调用 Model 层的 Service、Repository 完成业务逻辑，最后返回对应的 View。

IOC 是指 Nest 会自动扫描带有 @Controller、@Injectable 装饰器的类，创建它们的对象，并根据依赖关系自动注入它依赖的对象，免去了手动创建和组装对象的麻烦。

AOP 则是把通用逻辑抽离出来，通过切面的方式添加到某个地方，可以复用和动态增删切面逻辑。

Nest 的 Middleware、Guard、Interceptor、Pipe、ExceptionFilter 都是 AOP 思想的实现，只不过是不同位置的切面，它们都可以灵活的作用在某个路由或者全部路由，这就是 AOP 的优势。