import { useRouter } from 'next/router'
import ListingsContainer from './../../containers/listings/ListingsContainer';

const Dashboard = () => {
  const router = useRouter()
  const { dashboardId } = router.query

  return (
    <div className="dashboard">
      <ListingsContainer />
    </div>
  )
}

export default Dashboard
