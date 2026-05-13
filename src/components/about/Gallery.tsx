import Container from '../ui/Container';
import Section from '../ui/Section';
import SafeImage from '../ui/SafeImage';
import { COPY } from '../../data/copy';
import { PHOTOS } from '../../data/photos';

interface Tile {
  src: string;
  alt: string;
  fallback: string;
  className: string;
}

const TILES: Tile[] = [
  {
    src: PHOTOS.aboutInterior,
    alt: COPY.about.galleryAlts.interior,
    fallback: 'Interior KopiKu',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: PHOTOS.baristaPour,
    alt: COPY.about.galleryAlts.barista,
    fallback: 'Barista pouring',
    className: 'lg:col-span-2',
  },
  {
    src: PHOTOS.beansClose,
    alt: COPY.about.galleryAlts.beans,
    fallback: 'Biji kopi',
    className: 'lg:col-span-1',
  },
  {
    src: PHOTOS.cafeAmbience,
    alt: COPY.about.galleryAlts.ambience,
    fallback: 'Suasana cafe',
    className: 'lg:col-span-1',
  },
];

function Gallery() {
  return (
    <Section className="bg-cream/40">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="font-serif text-espresso text-2xl sm:text-3xl">
            {COPY.about.galleryTitle}
          </h2>
          <p className="mt-2 text-roast">{COPY.about.gallerySubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 sm:gap-4 lg:h-[28rem]">
          {TILES.map((tile) => (
            <figure
              key={tile.src}
              className={`relative overflow-hidden rounded-lg bg-roast/10 aspect-[4/3] sm:aspect-square lg:aspect-auto ${tile.className}`}
            >
              <SafeImage
                src={tile.src}
                alt={tile.alt}
                fallbackLabel={tile.fallback}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Gallery;
