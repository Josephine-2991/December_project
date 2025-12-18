import { PageBanner } from '../PageBanner/PageBanner'
import { PageNavigation } from '../PageNavigation/PageNavigation'

import './Header.css'

export function Header () {
  return (
      <>
      <header>
        <PageBanner
          timetext="Working: Monday - Friday 9am - 5pm"
          locationtext="Hudson Wisconsin (WI), 54016" />
        <PageNavigation />

      </header>
      
          
      </>
  )
}
