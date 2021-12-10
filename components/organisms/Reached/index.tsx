import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem count="290M+" category="Players Top Up" />
          <ReachedItem count="12.500" category="Games Available" />
          <ReachedItem count="99,9%" category="Happy Players" />
          <ReachedItem count="4.7" category="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
