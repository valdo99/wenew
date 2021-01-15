import { Fieldset,Button } from '@geist-ui/react'

export const CardNews = ({ title, subtitle, url }) => {
  return (
    <Fieldset style={{marginTop:"10vh"}}>
      <Fieldset.Title>{title}</Fieldset.Title>
      <Fieldset.Subtitle>{subtitle}</Fieldset.Subtitle>
      <Fieldset.Footer>
        <Fieldset.Footer.Status>
          click to read the article
    </Fieldset.Footer.Status>
        <Fieldset.Footer.Actions>
          <Button onClick={()=> window.location.href = url} auto size="mini">read full article</Button>
        </Fieldset.Footer.Actions>
      </Fieldset.Footer>
    </Fieldset>


    // <Card shadow style={{ width: '100%', height: '50px' }} >
    // <Image src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
    //  height="200" width="400" style={{ objectFit: 'cover' }} />
    //    <Text h4 style={{ marginBottom: '0' }}>{title}</Text>
    //    <Text type="secondary" small>{subtitle}</Text>
    //    <Card.Footer>
    //   <Link block target="_blank" href={url}>read article</Link>
    // </Card.Footer>
    // </Card>
  )
}