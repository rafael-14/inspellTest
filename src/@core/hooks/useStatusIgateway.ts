export const useStatusIgateway = (statusIgateway:string) => {
    switch (statusIgateway) {
      case 'RUN':
      case 'STOP':
        return '/dashboard'
      break
      case 'UNLINKED':
        return '/login'
      break
      default:
        return '/errorIgateway'
    }
}
