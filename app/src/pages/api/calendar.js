// TODO: Maybe we could return metadata about a tenant's calendar which is not
// relevant to a particular listing
export default (req, res) => {
  res.status(200).json({ welcomeMessage: 'Welcome to my calendar' })
}
