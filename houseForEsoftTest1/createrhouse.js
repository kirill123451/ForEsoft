
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)

    }
}


class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.margin = options.margin + 'px' + ' '     + 'auto'
        this.$el.style.border = options.border + 'px' + ' '+ 'solid' + ' ' + options.solidColor
        this.$el.style.background = options.color
        this.$el.style.position = options.position
        this.$el.style.bottom = options.bottom + 'px'
        this.$el.style.left = options.left + 'px'
        this.$el.style.top = options.top + 'px'
    }
}


const conturBox = new Box({
    selector : '#ConturBox',
    size : 400,
    margin : 100,
    border : 1,
    solidColor : 'black',
    position : 'relative'

})

const block1 = new Box({
    selector : '#block1',
    size : 150, 
    color : 'orange',
    position : 'absolute',
    bottom: 0,
    left : 120
})
class Circle extends Box {
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%'
    }

}
const window1 = new Circle({
    selector : '#window',
    size : 50,
    color : 'white',
    position : 'absolute',
    bottom : 50,
    left : 200
})

class Door extends Box {
    constructor(options) {
        super(options)
        this.$el.style.width = options.width + 'px'
        this.$el.style.height = options.height + 'px'
    }
}

const door = new Door ({
    selector : '#door',
    width : 40,
    height : 100,
    color : 'green',
    position : 'absolute',
    bottom : 0,
    left : 130
})

class Roof extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderTop = options.borderTop
        this.$el.style.borderRight = options.borderRight
        this.$el.style.borderBottom = options.borderBottom
        this.$el.style.borderLeft = options.borderLeft
    }
}

const roof = new Roof ({
    selector : '#roof',
    size : 0,
    position : 'absolute',
    bottom : 0,
    left : 95,
    top : 50,
    borderTop : '100px solid transparent',
    borderRight : '100px solid transparent',
    borderBottom : '100px solid red',
    borderLeft : '100px solid transparent',
})

class Tube extends Box {
    constructor(options){
        super(options)
        this.$el.style.zIndex = '-1'
        this.$el.style.width = options.width + 'px'
        this.$el.style.height = options.height + 'px'
    }
}

const tube = new Tube ({
    selector : '#tube',
    width : 30,
    height : 40,
    color : 'silver',
    position : 'absolute',
    bottom : 180,
    left : 130
})

const smog = new Circle ({
    selector : '#smog',
    size : 30,
    color : 'grey',
    position : 'absolute',
    bottom : 230,
    left : 110
})

    