import { useRouter } from 'next/router'
import ListingsContainer from './../../containers/listings/ListingsContainer';
import listingsApi from './../../api/listings';
import Constants from '../../constants/constants';

const Dashboard = ({ listings }) => {
  const router = useRouter()
  const { dashboardId } = router.query
  return (
    <div className="dashboard">
      <ListingsContainer listings={listings}/>
    </div>
  )
}

 // TODO: Later these dashboard pages would need to be dynamic, so we're using `getStaticPaths`
 // in lieu of simplicity, and just pretending our "DashboardID" is always 1
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = [{ params: { dashboardId: Constants.DefaultDashboardId }}];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(params)
  const dashboardId = params.dashboardId;
  const listings = await listingsApi.fetchListings(dashboardId);
  console.log(listings, 'heeeer')

  // Pass post data to the page via props
  // TODO: Talk to BE team, can we avoid the redundant nesting or make this nicer on FE?
  return { props: { listings: listings.listings } }
}

export default Dashboard
