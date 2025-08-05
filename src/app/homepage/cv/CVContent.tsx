export default function CVContent() {
  return (
    <div className="text-black px-4">
      {/*<h1 className="text-4xl font-bold mb-6 text-center">Declan W - Software Developer</h1>*/}

    <section className="text-right text-sm sm:text-base px-4">
      <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
      <p>Name: Declan Wood</p>
      {/*<p>Email: john@example.com</p>
      <p>Phone: 01234 567890</p>*/}
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Professional Profile:</h2>
      <p>
      I am currently an Apprentice Software Developer with hands-on experience planning, designing, building and deploying web applications using modern technologies. 
      I am comfortable working across the full development lifecycle; from requirement gathering to implementing secure authentication systems and managing deployments. 
      I seek opportunities to expand my professional skillset. I am eager to explore and learn additional frameworks, languages and best practices. 
      I always apply a ‘no mountain too high’ approach to all problems I come across.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-1">Languages & Frameworks:</h3>
        <p>
          TypeScript, JavaScript, React, Next.js, HTML, CSS, TailwindCSS. <br />
          Basic but growing knowledge: C#, Blazor, Python.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-1">Tools & PLatforms:</h3>
        <p>
        Figma, Git, AWS Amplify, Amazon Cognito, Supabase, Azure DevOps, Iron Session, GitHub.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-1">Practices:</h3>
        <p>
        Agile Development, Version Control, Component-Based Architecture, Problem Solving,Requirement Gathering, Wireframing.
        </p>
      </div>
    </section>


    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Work Experience:</h2>
      <div className="mb-4">
        <h3 className="text-xl font-medium">Apprentice Software Developer</h3>
        <p className="italic">BigThinkingLTD</p>

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Collaborated directly with clients and stakeholders to gather requirements,
            transforming them into user stories, wireframes, and actionable tasks.
          </li>
          <li>
            Independently developed and deployed a poetry competition platform for a business
            using Next.js, TypeScript, TailwindCSS, AWS Amplify, and Supabase.
          </li>
          <li>
            Currently enhancing the web platform with a secure authentication and authorisation
            system using Amazon Cognito, OpenID Connect, and Iron Session to ensure robust user
            management.
          </li>
          <li>
            Designed and implemented a simple SQL database using Supabase and serverless functions.
          </li>
          <li>
            Managed application deployments with AWS Amplify, acquiring hands-on experience with
            hosting, domain configuration, and handling of environment variables.
          </li>
          <li>
            Used an agile approach to development with Kanban boards to effectively plan and conduct
            sprints, allowing for timely project delivery.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium">Sales Executive</h3>
        <p className="italic">David Hayton</p>

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Managed stock pricing and performed accurate vehicle valuations, ensuring competitive pricing and optimised profitability.
          </li>
          <li>
            Assisted with the coordination of stock rotation between multiple dealership locations, maintaining optimal inventory levels.
          </li>
          <li>
            Sold vehicles, consistently meeting customer expectations
          </li>
          <li>
            Used problem solving skills to effectively address customer inquiries and resolve issues.
          </li>
          <li>
            Gained and maintained strong product knowledge to effectively assist customers, pairing them with a suitable vehicle, enhancing the customer’s buying experience.
          </li>
          <li>
            Addressed and solved any after-sales issues.
          </li>
        </ul>
      </div>
    </section>

    </div>
  );
}