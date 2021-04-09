export default {
  DefaultDashboardId: '1',
  LogoPath: '',
  ListingViewTypes: {
    Calendar: 'calendar'
  },
  ExceptionObjects: { // These are coupled to the `confirmAlert` package.. not ideal but work nicely enough
    SubmitFailure: {
      title: 'Failed to submit',
      message: `Your update failed. Please try again, or view your console for details. (Also see: src/api/listings)`,
      buttons: [
        {
          label: 'Continue',
          onClick: () => {}
        }
      ]
    },
    FetchFailure: {
      title: 'Failed to fetch data',
      message: `Your request failed. Please try again, or view your console for details. (Also see code doc in: src/api/listings)`,
      buttons: [
        {
          label: 'Continue',
          onClick: () => {}
        }
      ]
    }
  },
  ErrorMessages: {
    FetchListingData: 'There was an error fetching listing data.'
  }
}
