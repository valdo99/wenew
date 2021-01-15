import { Grid, Spacer } from '@geist-ui/react'
import { CardNews } from './CardNews'

export const Layout = ({ data }) => {

    return (
        <center>
            <h1 style={{marginTop:"5%"}}>WENEW</h1>
            <div style={{width:"60vw"}}>
                {data.map((news, i) =>
                    <CardNews  key={news.id} title={news.title} subtitle={news.description} url={news.url} />
                )}
            </div>
        </center>
    )
}
