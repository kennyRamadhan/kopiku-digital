const EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5567!2d107.1334!3d-6.3447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnNDAuOSJTIDEwN8KwMDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000';

function MapEmbed() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-espresso/10">
      <iframe
        src={EMBED_URL}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi KopiKu Digital"
      />
    </div>
  );
}

export default MapEmbed;
