import PageHero from '../components/hero/PageHero';
import PlaygroundContainer from '../components/playground/PlaygroundContainer';

const PlaygroundPage = () => {
  return (
    <div className="pb-10 w-full h-full flex flex-col justify-center items-center">
      <PageHero title={`🛝 Playground`} description={`Test Uniflow with your PDF*, TXT, and HTML files**`} short />
      <PlaygroundContainer />
    </div>
  );
};

export default PlaygroundPage;
