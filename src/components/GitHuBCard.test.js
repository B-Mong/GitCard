import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test("creates a snapshot", () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})