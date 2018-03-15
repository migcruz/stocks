import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        console.log("HELLO");
        console.log(posts);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/reactjs`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FetchDemo;