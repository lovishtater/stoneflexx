import about from '../assets/about.png';
import { Link } from 'react-router-dom';
import c2 from '../assets/c2.webp';

const buttonStyle =
  'bg-slate-500 text-sm mt-6 md:text-lg hover:bg-slate-700 text-white  font-semibold hover:text-white py-1 px-2 border-2 border-white hover:border-transparent mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105';

const About = () => {
  const features = [
    '100% Natural Stone Surface',
    'Light weight',
    'Flexible',
    'Easy to carry',
    'Environment friendly',
    'Water resistant',
    'Endless applications',
    'Quick installation',
    'Tidy work',
    'Impact resistant',
    'UV Resistance',
    'Wide Range of collection and sizes',
    'Order Now',
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="relative flex flex-row justify-center items-center w-full h-full mb-4">
        <div className="flex flex-col justify-center items-center w-full h-96">
          <img
            src={about}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center w-4/5 md:w-1/2 h-full">
          <h1 className="text-2xl md:text-6xl font-bold text-white my-2">
            StoneFlexx
          </h1>
          <div className="flex flex-col justify-center items-center my-2 bg-gray-500 p-4">
            <h2 className="text-base text-center md:text-2xl font-bold text-gray-light my-2">
              &quot;Transform your space: Premium stone veneer, unmatched
              value&quot;
            </h2>
            <Link to="/catalog">
              <button type="button" className={buttonStyle}>
                View Store
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full m-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">
          Stonework Symphony
        </h1>
        <p className="text-base md:text-xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
          Welcome to our esteemed stone veneer business, where quarter a century
          of expertise and craftsmanship blend seamlessly with the natural
          beauty of Rajasthan, India. With a rich legacy spanning 25 years, our
          company prides itself on offering a diverse and exclusive selection of
          rare stones, meticulously sourced from the majestic mountains and
          serene hills of the region. We are dedicated to providing our clients
          with unparalleled products and services, transforming the essence of
          the natural world into stunning stone veneers that stand the test of
          time.
        </p>
      </div>
      <hr className="w-4/5 md:w-3/4 border-1 border-gray-300" />
      <br />
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 m-2">
        Features
      </h1>
      <div className="flex flex-col md:flex-row justify-center w-full h-full">
        {/* <div className="flex flex-col justify-center items-center w-full h-full"> */}
        <img src={c2} alt="banner" className="w-full h-full object-cover" />
        {/* </div> */}
        <div className="flex flex-col items-center w-full h-full">
          <ul className="text-base md:text-xl font-bold text-gray-800 w-full text-center">
            {features.map((feature, i) => (
              <li
                className="mt-4"
                key={feature}
                className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-100'} p-3`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full m-8">
        <div className="flex flex-col justify-center items-center w-full h-full m-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 my-2">
            Installation Guide
          </h1>
          <p className="text-base md:text-2xl font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-center">
            Follow these essential steps to ensure a successful and long-lasting
            stone veneer installation.
          </p>
          <ul className="text-sm md:text-md font-bold text-gray-800 m-2 w-4/5 md:w-1/2 text-left">
            <li className="mt-4">
              <span className="font-bold text-xl">Site Preparation:</span>
              <ul>
                <li>
                  a. Inspect and clean the surface: Examine the surface for any
                  damage or irregularities. Remove any dust, dirt, or debris
                  using a brush or pressure washer.
                </li>
                <li>
                  b. Install a moisture barrier: Apply a weather-resistant
                  barrier to protect the substrate from water damage.
                </li>
                <li>
                  c. Attach metal lath: Secure a galvanized metal lath to the
                  surface using corrosion-resistant fasteners, ensuring the lath
                  is tightly affixed and overlaps at the edges.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <span className="font-bold text-xl ">Mixing Mortar:</span>
              <ul>
                <li>
                  a. Select a suitable mortar mix: Use a pre-blended mortar mix
                  specifically designed for stone veneers, following the
                  manufacturer's instructions.
                </li>
                <li>
                  b. Mix the mortar: Add water to the mortar mix gradually,
                  stirring until you achieve a thick, consistent texture
                  resembling peanut butter.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <span className="font-bold text-xl">
                Applying the Scratch Coat:
              </span>
              <ul>
                <li>
                  a. Apply the mortar: Use a trowel to spread a 1/2 inch layer
                  of mortar onto the metal lath, covering it completely.
                </li>
                <li>
                  b. Create a scratch coat: Use a notched trowel or a scratcher
                  to create horizontal grooves in the wet mortar.
                </li>
                <li>
                  c. Allow to cure: Let the scratch coat dry for at least 24
                  hours, or as recommended by the mortar manufacturer.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <span className="font-bold text-xl">
                Stone Veneer Installation:
              </span>
              <ul>
                <li>
                  a. Lay out the stones: Arrange the veneers in a visually
                  pleasing pattern, ensuring a balanced mix of sizes, shapes,
                  and colors.
                </li>
                <li>
                  b. Apply mortar to the stone: Butter the back of each veneer
                  with a 1/2 inch layer of mortar, covering the entire surface.
                </li>
                <li>
                  c. Press the stone onto the wall: Position the veneer on the
                  scratch coat, pressing firmly to ensure a strong bond. Hold
                  the stone in place for a few seconds to prevent slipping.
                </li>
                <li>
                  d. Fill the joints: Use a grout bag to apply mortar to the
                  gaps between the stones, filling them completely.
                </li>
                <li>
                  e. Clean as you go: Use a damp sponge or brush to remove any
                  excess mortar from the stone surface and joints.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <span className="font-bold text-xl">Finishing Touches:</span>
              <ul>
                <li>
                  a. Tool the joints: Once the mortar in the joints has
                  stiffened slightly, use a jointing tool to shape and smooth
                  the joints for a clean, finished appearance.
                </li>
                <li>
                  b. Final clean-up: After the mortar has fully cured, clean any
                  remaining residue from the stone surface using a soft brush
                  and water.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
