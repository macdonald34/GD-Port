import profile from '../assets/profile.jpg';

const AboutMe = () => (
  <div className="bg-[#f5f0e6] p-8 flex flex-col md:flex-row gap-6 items-center">
    <img src={profile} alt="Profile" className="w-48 h-48 rounded-md object-cover" />
    <div>
      <h2 className="text-xl font-bold">ABOUT ME</h2>
      <p className="mt-2">
        Hello everyone, thank you for allowing me to introduce myself. My name is Abdul Muiz Alfatih.
        I am 18 years old and from Indramayu, West Java. I am a content creator and editor.
      </p>
      <div className="mt-4">
        <p><strong>Contact me:</strong></p>
        <p>📞 081321575245</p>
        <p>📸 @alfatihmuiz</p>
      </div>
    </div>
  </div>
);
export default AboutMe;
