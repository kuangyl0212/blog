'use strict';
var React = require('react');

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['首页','分类','关于','登录','注册']
        }
    }
    clickHandler(event) {
        console.log('value',event.target.textContent);
        alert('Press--->' + event.target.textContent);
        // alert('hi');
        switch (event.target.textContent) {
            case '注册':
                console.log('click-reg');
                fetch('/reg',{
                    method:'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                    body:JSON.stringify({username:'test',password:'12345'})
                    }
                )
                .then(function(res) { console.log(res)})
                .catch(function(err) { console.log(err)})
        }
    }
    render() {
        console.log('render navi');
        var navView = [];
        this.state.data.map((item,i)=>{
            console.log(item);
            navView.push(<a key={i} style={styles.naviItem} onClick={this.clickHandler}>{item}</a>)
        });
        return (
            <nav style={styles.navi}>
                {navView}
            </nav>
        )
    }
}

var naviHeight = '50px';

var styles = {
    navi: {
        // background: '#666',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: '6%',
        height: naviHeight,
        // borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: 0,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 1px 3px #ccc',
    },
    naviItem: {
        lineHeight: naviHeight,
        fontFamily: 'Microsoft Yahei',
        marginLeft: '3%',
        marginRight: '3%',
        verticalAlign: 'middle',
        color: '#666'
    },
};

module.exports = Navi;

