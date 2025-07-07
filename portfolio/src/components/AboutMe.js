import profile from '../assets/profile.jpg';

const AboutMe = () => (
  <div className="bg-[#f5f0e6] p-8 flex flex-col md:flex-row gap-6 items-center">
    <img src={profile} alt="Profile" className="w-48 h-48 rounded-md object-cover" />
    <div>
      <h2 className="text-xl font-bold">ABOUT ME</h2>
      <p className="mt-2">
        Hello everyone, thank you for allowing me to introduce myself. My name is Macdonald Muhavi.
        I am 22 years old and from Nairobi,Kenya. I am a content software developer and graphic designer.
      </p>
      <div className="mt-4">
        <p><strong>Contact me:</strong></p>
        <p>📞 0740940735</p>
        <p>📸 @mac_moves_graphics</p>
      </div>
    </div>
  </div>
);
export default AboutMe;
