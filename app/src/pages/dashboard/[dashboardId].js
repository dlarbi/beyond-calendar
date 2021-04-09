import { RecoilRoot } from 'recoil';
import { listingsState } from './../../state/atoms';
import { initializeRecoilState }  from './../../state/initialize-state';

import { useRouter } from 'next/router'
import ListingsContainer from './../../containers/listings/ListingsContainer';
import listingsApi from './../../api/listings';
import Constants from '../../constants/constants';

const allAtoms = { listings: listingsState }

const Dashboard = ({ initialRecoilState }) => {
  const router = useRouter()
  const { dashboardId } = router.query
  return (
    <RecoilRoot initializeState={initializeRecoilState(initialRecoilState, allAtoms)}>
      <div className="dashboard">
        <ListingsContainer />
      </div>
    </RecoilRoot>
  )
}

// TODO: Later these dashboard pages would need to be dynamic, so we're using `getStaticPaths`
// in interest of simplicity, we're just pretending our "DashboardId" is always 1
export async function getStaticPaths() {
  const paths = [{ params: { dashboardId: Constants.DefaultDashboardId }}];
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const dashboardId = params.dashboardId;
  const listings = await listingsApi.fetchListings(dashboardId);
  const initialRecoilState = {
      listings: listings.listings
  }
  return { props: { initialRecoilState } }
}

export default Dashboard
