import { Component } from 'react'
import NewsItem from './NewsItem'

class NewsApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const apiKey = 'YOUR API KEY HERE'

        // fetch 하기에 좋은 메소드
        fetch(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.articles)
                this.setState({
                    articles: data.articles
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.articles.length === 0
                        ? <h1>표시할 뉴스가 없습니다.</h1>
                        :
                        <ul>
                            {
                                this.state.articles.map((article, idx) => {
                                    return (<li key={idx}>
                                        <NewsItem article={article} />
                                    </li>)
                                })
                            }
                            ​
                        </ul>
                }
                ​
            </div>
        );
    }
}

export default NewsApp