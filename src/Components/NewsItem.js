import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imageUrl ? "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D" : imageUrl} className="card-img-top" alt="Cricket Stadium" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
