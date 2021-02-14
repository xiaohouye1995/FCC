$(function () {
    var $send = $('#send')
    var $clean = $('#clean')
    var $barrage = $('#barrage')
    var $sendInput = $('#sendInput')
    var barrageStrs = [
        '陈美霞天下第一',
        '小陈最可爱❤️',
        '爱你的小周',
        '情人节快乐🎉',
        '新年暴富！！',
        '喜欢你',
        ]
    var colors = [
        '#F2EFE6',
        '#f17c67',
        '#DDF0ED',
        '#376956',
        '#C3BED4',
        '#495A80',
        '#C7FFEC',
        '#E9F01D',
        '#9966CC',
        '#00FF80',
        '#EEE8AB',
        '#BDB76A',
        '#008573',
        '#00755E',
        '#DEA681',
        '#483C32',
        '#FD5B78',
        '#FE4C40',
        '#DE3163',
        '#8A3324']
    var colorLength = colors.length
    var timer = setInterval(() => {
        let barrage = new Barrage({ str: barrageStrs[random(0, barrageStrs.length)], x: random(0, 300), y: 0, color: colors[random(0, colorLength - 1)], parent: $barrage })
        barrage.move()
    }, 800)
    $send.on('click', (eve) => {
        eve.preventDefault()
        let str = $sendInput.val()
        barrageStrs.push(str)
        let barrage = new Barrage({ str: str, x: random(0, 300), y: 0, color: colors[random(0, colorLength - 1)], parent: $barrage })
        barrage.move()
        if (timer === -1) {
            timer = setInterval(() => {
                let barrage = new Barrage({ str: barrageStrs[random(0, barrageStrs.length)], x: random(0, 300), y: 0, color: colors[random(0, colorLength - 1)], parent: $barrage })
                barrage.move()
            }, 800)
        }

    })
    $clean.on('click', (eve) => {
        eve.preventDefault()
        barrageStrs = []
        $barrage.empty()
        clearInterval(timer)
        timer = -1
    })

})
function Barrage({ str: str, x: x, y: y, color: color, parent: parent }) {
    var that = this
    this.text = str
    this.pos = {
        x: x,
        y: y
    }
    this.state = false
    this.entity = $('<span>')
    this.entity.text(str).css({
        position: 'absolute',
        top: x,
        right: y,
        color: color,
        fontSize: '1.5rem'
    })

    this.speed = 1
    parent.append(this.entity)
    this.move = function () {
        that.state = true
        this.show()
        var timer = setInterval(() => {
            var left = parseInt(that.entity.css('left'))
            if (left < 0) {
                clearInterval(timer)
                that.hide()
                that.entity.remove()
            }
            var right = parseInt(that.entity.css('right'))
            right += that.speed
            that.speed += 0.05
            that.entity.css({ 'right': right })
        }, 20)
    }
    this.show = () => {
        that.entity.show()
    }
    this.hide = () => {
        that.entity.hide()
    }
    this.hide()
}
function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}