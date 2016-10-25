import React, {Component} from 'react';
import Loading from './Loading';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            posts: [],
        }
    }
    componentWillMount () {
        fetch('/home',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'get'
        })
            .then((res)=>{return res.json()})
            .then((json)=>{
                // console.log('json---',json);
                this.setState({
                    isFetching: false,
                    posts: json,
                })
            })
            .catch((err)=>{console.log('error',err)});
    }
    render () {
        // console.log('state---',this.state.posts);
        let createMarkup = (htmlStr) => { return {__html: htmlStr}; };
        let articles = this.state.posts.map((obj)=>{
            console.log('obj--',obj);
            return <div key={obj._id}>
                <h2>{obj.title}</h2>
                <div dangerouslySetInnerHTML={createMarkup(obj.content)}></div>
            </div>
        });
        // console.log('render-->Home',this.props);
        if (this.state.isFetching) {
            return <Loading />
        }
        return (
            <div style={styles.container}>
                {articles}
            </div>
        )
    }
}

// module.exports = Home;

var styles = {
    container: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    }
};

export default Home;
