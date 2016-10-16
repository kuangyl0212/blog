var React = require('react');

var {Editor, EditorState, RichUtils} = require('draft-js');

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    render() {
        // console.log(this.state);
        const {editorState} = this.state;
        return <div style={styles.editor}>
            
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <Editor
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
            />
        </div>

    }
}

var Post = React.createClass({
    render: function () {
        // console.log('render-->Post',this.props);
        return (
            <div style={styles.contentBox}>
                <MyEditor />
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