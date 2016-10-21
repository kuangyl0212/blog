var React = require('react');

// var {Editor, EditorState, RichUtils} = require('draft-js');

// class MyEditor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {editorState: EditorState.createEmpty()};
//         this.onChange = (editorState) => this.setState({editorState});
//         this.handleKeyCommand = this.handleKeyCommand.bind(this);
//     }
//     handleKeyCommand(command) {
//         const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
//         if (newState) {
//             this.onChange(newState);
//             return 'handled';
//         }
//         return 'not-handled';
//     }
//     _onBoldClick() {
//         this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
//     }
//     render() {
//         // console.log(this.state);
//         const {editorState} = this.state;
//         return <div style={styles.editor}>
//
//             <button onClick={this._onBoldClick.bind(this)}>Bold</button>
//             <Editor
//                 editorState={editorState}
//                 handleKeyCommand={this.handleKeyCommand}
//                 onChange={this.onChange}
//             />
//         </div>
//
//     }
// }

// var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

import UEditor from './UEditor';

var Post = React.createClass({
    getInitialState: function () {
        return ({
            title: '',
            content: '',
        })
    },
    componentDidMount: function () {
    },
    titleChange: function (event) {
        console.log('event---',event.target.value,this.state);
        let value = event.target.value;
        this.setState({
            title: value
        })
    },
    submit: function () {
        let title =this.state.title;
        let content = this.refs.ueditor.getContent();
        let post = {
            title: title,
            content: content
        };
        let postData = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(post)
        };
        fetch('/post',postData).then(function (res) {
            console.log('res---',res);
            return res.json();
        }).then((json)=>{console.log('json---',json)}).catch((err)=>{console.log('error',err)});
    },
    render: function () {
        // console.log('render-->Post',this.props);
        return (
            <div style={styles.contentBox}>
                <label>
                    标题：
                    <input type="text" value={this.state.title} onChange={(event)=>this.titleChange(event)}/>
                </label>
                <UEditor ref="ueditor"/>
                <button onClick={()=>this.submit()}>确认</button>
            </div>
        )
    }
});

var styles = {
  editor: {
      // useless
      // width: '100%',
      // height: '1000px',
      padding: '1.5rem',
      borderRadius: '1rem',
      background: '#eee',
  }
};

module.exports = Post;