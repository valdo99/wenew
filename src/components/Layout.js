import { Grid, Spacer } from '@geist-ui/react'
import { CardNews } from './CardNews'

export const Layout = ({ data }) => {

    return (
        <center>
            <h1 style={{marginTop:"2%", marginBottom:"0.5em", color:"#000000"}}>WENEW</h1>
            <div style={{width:"70vw"}}>
                {data.map((news, i) =>
                    <CardNews key={news.id} title={news.title} subtitle={news.description} url={news.url} />
                )}
            </div>
        </center>
    )
}
