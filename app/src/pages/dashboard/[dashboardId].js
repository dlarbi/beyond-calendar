import { useRouter } from 'next/router'
import ListingsContainer from './../../containers/listings/ListingsContainer';
import listingsApi from './../../api/listings';
import Constants from '../../constants/constants';

const Dashboard = ({ listings }) => {
  const router = useRouter()
  const { dashboardId } = router.query
  return (
    <div className="dashboard">
      <ListingsContainer listings={listings} />
    </div>
  )
}

 // TODO: Later these dashboard pages would need to be dynamic, so we're using `getStaticPaths`
 // in interest of simplicity, we're just pretending our "DashboardId" is always 1
export async function getStaticPaths() {
  const paths = [{ params: { dashboardId: Constants.DefaultDashboardId }}];
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const dashboardId = params.dashboardId;
  const listings = await listingsApi.fetchListings(dashboardId);

  // Pass post data to the page via props
  // TODO: Talk to BE team, can we avoid the redundant nesting or make this nicer in the FE code?
  return { props: { listings: listings.listings } }
}

export default Dashboard
