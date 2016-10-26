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
        // let createMarkup = (htmlStr) => { return {__html: htmlStr}; };
        let articles = this.state.posts.map((obj)=>{
            console.log('obj---',obj);
            return (
                <li key={obj._id} style={styles.listItem}>
                    <h3>{obj.title}</h3>
                </li>
            );
                {/*<div dangerouslySetInnerHTML={createMarkup(obj.content)}></div>*/}
        });
        // console.log('render-->Home',this.props);
        if (this.state.isFetching) {
            return <Loading />
        }
        return (
            <div style={styles.container}>
                <ul style={styles.list}>
                    {articles}
                </ul>
            </div>
        )
    }
}

// module.exports = Home;

var styles = {
    container: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    list: {
        margin: 0,
        padding: 0,
    },
    listItem: {
        height: '5rem',
        listStyle: 'none',
        borderBottom: '1px solid #BBB8AA'
    }
};

export default Home;
