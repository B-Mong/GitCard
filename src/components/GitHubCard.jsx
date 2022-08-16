import Card from 'react-bootstrap/Card'
import mike from './mike.jpg'

function GitHubCard() {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={mike} />
                <Card.Body>
                    <Card.Title>Brian M</Card.Title>
                    <Card.Text>https://github.com/B-Mong</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard