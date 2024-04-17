import { Outlet } from 'react-router-dom';

import ImagePublic from './components/image public/imagePublic'

const PublicLayout = () => {
  return (
    <div className='containerfluid'>
      <div className='mainWrapper'>
        <div className='row px-9 py-9'>
            <ImagePublic />
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PublicLayout;