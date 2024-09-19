export default function About() {
  return (
    <section className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 p-6 rounded space-y-2" id="about">
        <h3 className="text-2xl font-semibold">About Us</h3>
        <p>
          The Maryland Institute of Development (MID) is a non-profit
          organization dedicated to advancing traditional Islamic
          education and providing essential services to the community. Our
          comprehensive educational offers
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded space-y-2" id="mission">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p>
          We strive to provide accessible learning opportunities for
          working professionals, students, and families by offering
          weekend and evening classes. We believe that by attaining
          knowledge and focusing on self-improvement, we can positively
          impact the world around us.
        </p>
      </div>
    </div>
  </section>
  );
}
