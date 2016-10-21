var React = require('react');
var Navi = require('./Navi');

var Reg = React.createClass({
    render: function() {
        // console.log('render-->Reg',this.props);
        return (
            <div style={styles.contentBox}>reg</div>
        )
    }
});

var styles={
    contentBox: {
        // padding: '3% 10% 0',
        width: '100%',
        height: '2000px'
    },
};

module.exports = Reg;
