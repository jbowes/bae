const Page = (env) => {
  const envs = Object.entries(env).map(([key, value]) => (
    <tr key={key}><td>{key}</td><td>{value.toString()}</td></tr>
  ))

  return (
    <body>
      <h1>This feels like PHP</h1>

      <p> welcome to the best app ever - next.js edition</p>

      <table>
        <th><td>Key</td><td>Value</td></th>
        <tbody>
          { Object.entries(env).map(([key, value]) => (
            <tr key={key}><td>{key}</td><td>{value.toString()}</td></tr>
          ))}
        </tbody>
      </table>
    </body>
  )
}

Page.getInitialProps = () => (
  process ? process.env :
    fetch('/env').then(res => res.json())
)

export default Page
