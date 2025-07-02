const Designs = () => {
  const designImages = [
    '/assets/design1.jpg',
    '/assets/design2.jpg',
    '/assets/design3.jpg',
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Graphic Design</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {designImages.map((src, idx) => (
          <img key={idx} src={src} alt={`Design ${idx}`} className="w-full rounded-md" />
        ))}
      </div>
    </div>
  );
};
export default Designs;
