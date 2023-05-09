import Main from 'widgets/Main/index';
import Sidebar from 'widgets/Sidebar';
import { useMatchMedia } from 'hooks/use-match-media';
import { useEffect, useState } from 'react';

function App() {
  const { isMobile, isDesktop } = useMatchMedia();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (isDesktop) {
        setShowSidebar(true);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  return (
    <div className="App">
      <div>
        {isMobile ? (
          <button className="showbutton" onClick={() => setShowSidebar(!showSidebar)}>
            {showSidebar ? '<<<' : '>>>'}
          </button>
        ) : (
          ''
        )}
      </div>
      {showSidebar ? <Sidebar /> : ''}
      <Main isMobile={isMobile} />
    </div>
  );
}

export default App;
