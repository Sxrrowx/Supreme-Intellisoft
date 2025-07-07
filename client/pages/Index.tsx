import { ExternalLink } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with particles */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/986ba6a3cbfd9980c8b3735f542aca7c51321322?width=3840')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#E5E5E5",
        }}
      />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
            <div
              className="w-full h-full rounded-3xl bg-gray-200 shadow-2xl"
              style={{
                boxShadow:
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 100px 18px rgba(214, 40, 40, 0.30)",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/653ec04ec44f983aaad6429a6f05940b03c09d0b?width=272"
                alt="Supremint Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-15 sm:w-32 sm:h-16 lg:w-36 lg:h-18"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center">
            <div className="flex items-center gap-1 px-1 py-1 rounded-full bg-gray-200 border border-gray-200">
              <div className="flex items-center justify-center px-2 py-1 bg-supremint-red rounded-xl">
                <span className="text-white text-sm font-medium">New</span>
              </div>
              <span className="text-supremint-blue text-sm font-medium px-2 py-1">
                Automated Lead Generation
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-6 lg:gap-8 text-center">
            {/* Headline */}
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-supremint-blue">
                  Unlock the Power of{" "}
                </span>
                <span className="text-supremint-red">AI </span>
                <span className="text-supremint-blue">
                  Made Simple for Your Business
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
                Supremint simplifies AI and automation for profitable business
                use, Without the tech jargon.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 bg-supremint-red text-white rounded-md font-medium text-sm hover:bg-red-600 transition-colors shadow-lg"
                style={{
                  boxShadow:
                    "0px 0.707px 0.707px -0.625px rgba(0, 0, 0, 0.15), 0px 1.807px 1.807px -1.25px rgba(0, 0, 0, 0.14), 0px 3.622px 3.622px -1.875px rgba(0, 0, 0, 0.14), 0px 6.866px 6.866px -2.5px rgba(0, 0, 0, 0.13), 0px 13.647px 13.647px -3.125px rgba(0, 0, 0, 0.11), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)",
                }}
              >
                Book A Demo
                <ExternalLink size={16} className="text-white" />
              </button>

              <button
                className="flex items-center justify-center px-6 py-3 bg-supremint-gray text-supremint-blue rounded-md font-medium text-sm hover:bg-gray-300 transition-colors shadow-lg"
                style={{
                  boxShadow:
                    "0px 0.707px 0.707px -0.625px rgba(0, 0, 0, 0.15), 0px 1.807px 1.807px -1.25px rgba(0, 0, 0, 0.14), 0px 3.622px 3.622px -1.875px rgba(0, 0, 0, 0.14), 0px 6.866px 6.866px -2.5px rgba(0, 0, 0, 0.13), 0px 13.647px 13.647px -3.125px rgba(0, 0, 0, 0.11), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)",
                }}
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                Our Services
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-supremint-red">AI</span>
                <span className="text-supremint-blue">
                  {" "}
                  Solutions That Optimize
                </span>
                <br />
                <span className="text-supremint-blue">
                  Your Business Results
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                We build simple tools that take care of the busywork, so you can
                focus on what matters most.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-24 max-w-6xl mx-auto">
            {/* Workflow Automation */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5d8bb43950424a48a8d33974ba96d959%2F69f449c6c9364f14af2577579a3ff69f?format=webp&width=800"
                    alt="AI Dashboard for Workflow Automation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Workflow Automation
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Simplify your Workflows
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  We optimize your operations by automating everyday workflows
                  like data entry and approvals, so your team can focus on
                  higher-impact work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Internal Task Bots
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    100+ Automations
                  </span>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c827f90cd784978224d5bb08a71f5e324bfd3ebd?width=700"
                    alt="AI Assistant Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    AI Assistant
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Optimize Your Time
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  From scheduling meetings to writing emails and summarizing
                  calls, our AI assistants operate 24/7 to keep your business
                  efficient, organized, and one step ahead.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Emails
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Scheduling
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Many more
                  </span>
                </div>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8827b5fd553280d0cfe2ea38fe53fbcd7a3b2c?width=700"
                    alt="Sales & Marketing Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray/80 rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Sales & Marketing
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Boost Sales Performance
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  AI-driven tools to attract leads, deliver personalized
                  messages, and automate content—so your sales grow and your
                  brand shines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Leads
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Content
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Social post
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Projects */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {/* Custom dashboard interface */}
                <div className="w-full h-full bg-supremint-blue rounded-xl p-4 relative">
                  <div className="bg-supremint-gray rounded-lg p-4 h-full flex flex-col gap-3">
                    <div className="text-xs text-supremint-blue font-medium">
                      Hey David!
                    </div>
                    <div className="text-xs text-supremint-blue">
                      Here is your Custom project & schedule
                    </div>

                    <div className="bg-supremint-gray rounded-md p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-supremint-blue rounded-sm"></div>
                        <span className="text-xs text-supremint-blue font-medium">
                          On going project:
                        </span>
                      </div>

                      <div className="bg-supremint-gray rounded p-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-supremint-blue rounded-sm"></div>
                          <div>
                            <div className="text-xs text-supremint-blue font-medium">
                              Customer Support Chatbot
                            </div>
                            <div className="text-xs text-supremint-blue">
                              90% Finished
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-gray-300 my-2"></div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-supremint-blue rounded-sm"></div>
                          <span className="text-supremint-blue">Schedule</span>
                        </div>
                        <div className="flex gap-1">
                          {["Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <div
                              key={day}
                              className="text-xs text-supremint-blue px-1 py-0.5"
                            >
                              {day}
                            </div>
                          ))}
                          <div className="text-xs text-supremint-blue px-1 py-0.5 bg-purple-500 rounded">
                            Su
                          </div>
                        </div>
                        <div className="text-xs text-supremint-blue">
                          No meeting today.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Custom Projects
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Build Smarter Systems
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  Whether you're starting from scratch or enhancing an existing
                  system, we offer strategic consulting and develop custom AI
                  projects aligned with your unique goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Strategy
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Custom AI
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Consulting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                Benefits
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-supremint-blue">
                The Key Benefits of AI for Your Business Growth
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                Discover how AI automation enhances efficiency, reduces costs,
                and drives business growth with smarter, faster processes.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Increased Productivity */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8838 13.0322L9.94626 24.751C9.83035 24.8747 9.67736 24.9573 9.51036 24.9864C9.34337 25.0155 9.17143 24.9895 9.0205 24.9124C8.86958 24.8352 8.74784 24.711 8.67367 24.5586C8.59951 24.4062 8.57693 24.2338 8.60935 24.0674L10.041 16.9062L4.41306 14.793C4.29219 14.7478 4.1844 14.6733 4.09933 14.5763C4.01425 14.4792 3.95454 14.3626 3.92552 14.2369C3.89651 14.1112 3.89909 13.9802 3.93304 13.8557C3.96699 13.7312 4.03125 13.617 4.12009 13.5234L15.0576 1.80468C15.1735 1.68098 15.3265 1.59834 15.4935 1.56923C15.6605 1.54011 15.8324 1.5661 15.9833 1.64328C16.1343 1.72045 16.256 1.84462 16.3302 1.99705C16.4043 2.14947 16.4269 2.32189 16.3945 2.48827L14.959 9.65722L20.5869 11.7676C20.7069 11.8131 20.8138 11.8875 20.8982 11.9841C20.9826 12.0807 21.0419 12.1967 21.0709 12.3217C21.0998 12.4467 21.0976 12.5769 21.0642 12.7009C21.0309 12.8248 20.9676 12.9386 20.8799 13.0322H20.8838Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  Increased Productivity
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Gain actionable insights with AI-driven analytics to improve
                  decision-making and strategy.
                </p>
              </div>
            </div>

            {/* Better Customer Experience */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4938 11.3186L23.0016 6.33226C22.9098 6.14873 22.7828 5.98509 22.6277 5.85067C22.4726 5.71625 22.2926 5.61369 22.0979 5.54885C21.9032 5.48402 21.6977 5.45816 21.493 5.47278C21.2883 5.48739 21.0885 5.54218 20.905 5.63402L18.4762 6.84789L13.36 5.49437C13.2288 5.46021 13.0909 5.46021 12.9596 5.49437L7.84343 6.84789L5.41472 5.63402C5.23121 5.54218 5.0314 5.48739 4.82671 5.47278C4.62202 5.45816 4.41645 5.48402 4.22175 5.54885C4.02706 5.61369 3.84704 5.71625 3.69198 5.85067C3.53691 5.98509 3.40985 6.14873 3.31804 6.33226L0.825854 11.3176C0.734015 11.5011 0.679224 11.7009 0.664611 11.9056C0.649998 12.1103 0.67585 12.3159 0.740689 12.5106C0.805528 12.7053 0.908085 12.8853 1.0425 13.0404C1.17692 13.1954 1.34057 13.3225 1.5241 13.4143L4.16082 14.7336L9.57976 18.6037C9.65961 18.6606 9.74936 18.702 9.84441 18.7258L16.0944 20.2883C16.2253 20.3211 16.3625 20.3195 16.4925 20.2836C16.6226 20.2476 16.7411 20.1786 16.8366 20.0832L20.7428 16.177L22.2155 14.7043L24.7956 13.4143C25.166 13.2289 25.4476 12.904 25.5785 12.511C25.7095 12.118 25.679 11.6891 25.4938 11.3186ZM20.1335 14.5774L16.7731 11.886C16.6226 11.7654 16.4328 11.7048 16.2402 11.7158C16.0477 11.7268 15.866 11.8086 15.7302 11.9455C13.9909 13.6975 12.0524 13.4758 10.8161 12.6946L15.0387 8.593H18.1452L20.8024 13.9065L20.1335 14.5774ZM16.0446 18.6653L10.3688 17.2463L5.56414 13.8147L8.29851 8.34593L13.1598 7.05785L14.1169 7.31078L9.72234 11.5764L9.71453 11.5852C9.5491 11.7506 9.42294 11.9511 9.34534 12.1718C9.26774 12.3925 9.24069 12.6278 9.26618 12.8603C9.29168 13.0929 9.36907 13.3167 9.49264 13.5154C9.61621 13.714 9.78282 13.8824 9.98015 14.008C11.988 15.2903 14.4108 15.0823 16.319 13.5198L19.0192 15.6887L16.0446 18.6653ZM13.5329 22.0637C13.4907 22.2326 13.3933 22.3825 13.2562 22.4897C13.1191 22.5969 12.9501 22.6553 12.776 22.6555C12.7119 22.6554 12.6479 22.6475 12.5856 22.6321L8.51238 21.6135C8.4172 21.59 8.32738 21.5486 8.24773 21.4914L5.67449 19.6536C5.51627 19.5293 5.41206 19.3488 5.38357 19.1497C5.35508 18.9506 5.40451 18.7481 5.52155 18.5845C5.63859 18.4209 5.81423 18.3088 6.0119 18.2714C6.20957 18.2341 6.41402 18.2744 6.58269 18.384L9.03484 20.136L12.9645 21.1164C13.1655 21.1667 13.3383 21.2947 13.4448 21.4724C13.5514 21.65 13.5831 21.8627 13.5329 22.0637Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  Better Customer Experience
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Personalized AI interactions improve response times, customer
                  engagement, and overall satisfaction.
                </p>
              </div>
            </div>

            {/* 24/7 Availability */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8301 3.12402C10.8214 3.12402 8.85776 3.71968 7.18757 4.83566C5.51739 5.95164 4.21563 7.53783 3.44693 9.39364C2.67823 11.2495 2.4771 13.2915 2.86898 15.2617C3.26086 17.2318 4.22815 19.0414 5.64853 20.4618C7.06891 21.8822 8.87858 22.8495 10.8487 23.2414C12.8188 23.6333 14.8609 23.4321 16.7167 22.6634C18.5725 21.8947 20.1587 20.593 21.2747 18.9228C22.3907 17.2526 22.9863 15.289 22.9863 13.2803C22.9835 10.5875 21.9125 8.00591 20.0085 6.10186C18.1044 4.19781 15.5228 3.12687 12.8301 3.12402ZM18.2988 14.0615H12.8301C12.6229 14.0615 12.4242 13.9792 12.2777 13.8327C12.1311 13.6862 12.0488 13.4875 12.0488 13.2803V7.81152C12.0488 7.60432 12.1311 7.40561 12.2777 7.2591C12.4242 7.11258 12.6229 7.03027 12.8301 7.03027C13.0373 7.03027 13.236 7.11258 13.3825 7.2591C13.529 7.40561 13.6113 7.60432 13.6113 7.81152V12.499H18.2988C18.506 12.499 18.7047 12.5813 18.8513 12.7278C18.9978 12.8744 19.0801 13.0731 19.0801 13.2803C19.0801 13.4875 18.9978 13.6862 18.8513 13.8327C18.7047 13.9792 18.506 14.0615 18.2988 14.0615Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  24/7 Availability
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  AI-powered systems operate around the clock, ensuring seamless
                  support and execution without downtime.
                </p>
              </div>
            </div>

            {/* Cost Reduction */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2.89404C10.4913 2.89404 8.52768 3.4897 6.85749 4.60568C5.18731 5.72166 3.88556 7.30785 3.11685 9.16366C2.34815 11.0195 2.14702 13.0616 2.5389 15.0317C2.93079 17.0018 3.89807 18.8115 5.31845 20.2318C6.73883 21.6522 8.5485 22.6195 10.5186 23.0114C12.4887 23.4033 14.5308 23.2021 16.3866 22.4334C18.2424 21.6647 19.8286 20.363 20.9446 18.6928C22.0606 17.0226 22.6563 15.059 22.6563 13.0503C22.6534 10.3576 21.5825 7.77593 19.6784 5.87188C17.7744 3.96783 15.1927 2.89689 12.5 2.89404ZM14.0625 18.519H13.2813V19.3003C13.2813 19.5075 13.1989 19.7062 13.0524 19.8527C12.9059 19.9992 12.7072 20.0815 12.5 20.0815C12.2928 20.0815 12.0941 19.9992 11.9476 19.8527C11.8011 19.7062 11.7188 19.5075 11.7188 19.3003V18.519H10.9375C10.1087 18.519 9.31385 18.1898 8.7278 17.6038C8.14174 17.0177 7.8125 16.2228 7.8125 15.394C7.8125 15.1868 7.89481 14.9881 8.04133 14.8416C8.18784 14.6951 8.38655 14.6128 8.59375 14.6128C8.80095 14.6128 8.99967 14.6951 9.14618 14.8416C9.29269 14.9881 9.375 15.1868 9.375 15.394C9.375 15.8084 9.53962 16.2059 9.83265 16.4989C10.1257 16.7919 10.5231 16.9565 10.9375 16.9565H14.0625C14.4769 16.9565 14.8743 16.7919 15.1674 16.4989C15.4604 16.2059 15.625 15.8084 15.625 15.394C15.625 14.9796 15.4604 14.5822 15.1674 14.2892C14.8743 13.9962 14.4769 13.8315 14.0625 13.8315H11.3281C10.4993 13.8315 9.70447 13.5023 9.11842 12.9163C8.53237 12.3302 8.20313 11.5353 8.20313 10.7065C8.20313 9.87774 8.53237 9.08289 9.11842 8.49683C9.70447 7.91078 10.4993 7.58154 11.3281 7.58154H11.7188V6.80029C11.7188 6.59309 11.8011 6.39438 11.9476 6.24787C12.0941 6.10135 12.2928 6.01904 12.5 6.01904C12.7072 6.01904 12.9059 6.10135 13.0524 6.24787C13.1989 6.39438 13.2813 6.59309 13.2813 6.80029V7.58154H13.6719C14.5007 7.58154 15.2955 7.91078 15.8816 8.49683C16.4676 9.08289 16.7969 9.87774 16.7969 10.7065C16.7969 10.9137 16.7146 11.1125 16.5681 11.259C16.4215 11.4055 16.2228 11.4878 16.0156 11.4878C15.8084 11.4878 15.6097 11.4055 15.4632 11.259C15.3167 11.1125 15.2344 10.9137 15.2344 10.7065C15.2344 10.2921 15.0698 9.89471 14.7767 9.60169C14.4837 9.30866 14.0863 9.14404 13.6719 9.14404H11.3281C10.9137 9.14404 10.5163 9.30866 10.2233 9.60169C9.93025 9.89471 9.76563 10.2921 9.76563 10.7065C9.76563 11.1209 9.93025 11.5184 10.2233 11.8114C10.5163 12.1044 10.9137 12.269 11.3281 12.269H14.0625C14.8913 12.269 15.6862 12.5983 16.2722 13.1843C16.8583 13.7704 17.1875 14.5652 17.1875 15.394C17.1875 16.2228 16.8583 17.0177 16.2722 17.6038C15.6862 18.1898 14.8913 18.519 14.0625 18.519Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  Cost Reduction
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  AI automation minimizes manual work, cuts operational costs,
                  and optimizes resource allocation for better profitability.
                </p>
              </div>
            </div>

            {/* Data-Driven Insights */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3785 16.3648V22.7456C12.3789 22.8009 12.3675 22.8557 12.3452 22.9063C12.3228 22.9568 12.2899 23.0021 12.2487 23.039C12.2076 23.076 12.159 23.1037 12.1063 23.1205C12.0536 23.1372 11.9979 23.1426 11.943 23.1363C10.1378 22.9145 8.42486 22.2134 6.98229 21.1057C5.53972 19.998 4.42013 18.5242 3.73987 16.8374C3.71954 16.7861 3.7103 16.7311 3.71275 16.676C3.71521 16.6209 3.72931 16.567 3.75413 16.5177C3.77895 16.4684 3.81392 16.425 3.85674 16.3902C3.89956 16.3554 3.94926 16.3301 4.00257 16.3159L10.1637 14.6616C10.2426 14.6409 10.3259 14.6454 10.4021 14.6745C10.4783 14.7036 10.5435 14.7558 10.5885 14.8238C10.9615 15.3634 11.4938 15.7731 12.111 15.9956C12.1886 16.0214 12.2562 16.0709 12.3042 16.1371C12.3522 16.2033 12.3782 16.283 12.3785 16.3648ZM13.1657 2.89406C13.0626 2.89329 12.9603 2.91293 12.8649 2.95184C12.7694 2.99076 12.6826 3.04818 12.6094 3.12081C12.5363 3.19343 12.4782 3.27981 12.4386 3.37498C12.3989 3.47015 12.3785 3.57222 12.3785 3.67531V9.14406C12.377 9.34955 12.457 9.54724 12.6012 9.69373C12.7453 9.84021 12.9416 9.92351 13.1471 9.92531C13.8849 9.92213 14.6001 10.1801 15.166 10.6536C15.7318 11.1271 16.1119 11.7856 16.2389 12.5124C16.3659 13.2392 16.2317 13.9875 15.8599 14.6249C15.4881 15.2622 14.9028 15.7474 14.2076 15.9947C14.13 16.0206 14.0625 16.0703 14.0147 16.1368C13.9669 16.2032 13.9411 16.2829 13.941 16.3648V22.7456C13.9407 22.8008 13.9521 22.8555 13.9744 22.906C13.9967 22.9565 14.0295 23.0017 14.0705 23.0386C14.1116 23.0755 14.16 23.1033 14.2126 23.1201C14.2652 23.137 14.3207 23.1425 14.3756 23.1363C16.9493 22.8319 19.3093 21.5551 20.9723 19.5673C22.6353 17.5796 23.4755 15.0313 23.3209 12.4443C23.1662 9.85727 22.0285 7.42722 20.1405 5.65175C18.2526 3.87628 15.7573 2.88971 13.1657 2.89406ZM10.0407 12.8052C10.077 12.3437 10.2154 11.8961 10.4459 11.4947V11.4878C10.5233 11.3541 10.5594 11.2004 10.5495 11.0463C10.5396 10.8921 10.4842 10.7443 10.3903 10.6216C10.3246 10.5372 10.243 10.4665 10.15 10.4136L5.4303 7.68508C5.34138 7.6338 5.24322 7.60055 5.14143 7.58723C5.03965 7.57391 4.93624 7.58078 4.83711 7.60744C4.73798 7.6341 4.64508 7.68004 4.56372 7.74263C4.48235 7.80521 4.41412 7.88322 4.36292 7.97219C3.22631 9.94071 2.78209 12.2333 3.1012 14.4839C3.10873 14.5388 3.12787 14.5915 3.15734 14.6385C3.18681 14.6855 3.22594 14.7256 3.27213 14.7563C3.31832 14.7869 3.3705 14.8074 3.42522 14.8164C3.47994 14.8253 3.53593 14.8225 3.58948 14.8081L9.76331 13.148C9.83982 13.1268 9.90792 13.0825 9.95827 13.0212C10.0086 12.9598 10.0388 12.8844 10.0446 12.8052H10.0407Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  Data-Driven Insights
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Leverage AI to analyze vast data sets, identify trends, and
                  make smarter, faster, and more accurate business decisions.
                </p>
              </div>
            </div>

            {/* Scalability & Growth */}
            <div className="bg-supremint-gray rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center w-8 h-8 rounded">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9863 20.8628C22.9863 21.07 22.904 21.2687 22.7575 21.4152C22.611 21.5617 22.4123 21.644 22.2051 21.644H3.45508C3.24788 21.644 3.04916 21.5617 2.90265 21.4152C2.75614 21.2687 2.67383 21.07 2.67383 20.8628C2.67383 20.6556 2.75614 20.4569 2.90265 20.3104C3.04916 20.1639 3.24788 20.0815 3.45508 20.0815H4.23633V13.8315C4.23633 13.6243 4.31864 13.4256 4.46515 13.2791C4.61166 13.1326 4.81038 13.0503 5.01758 13.0503H7.36133C7.56853 13.0503 7.76724 13.1326 7.91375 13.2791C8.06027 13.4256 8.14258 13.6243 8.14258 13.8315V20.0815H9.70508V9.14404C9.70508 8.93684 9.78739 8.73813 9.9339 8.59162C10.0804 8.4451 10.2791 8.36279 10.4863 8.36279H13.6113C13.8185 8.36279 14.0172 8.4451 14.1638 8.59162C14.3103 8.73813 14.3926 8.93684 14.3926 9.14404V20.0815H15.9551V4.45654C15.9551 4.24934 16.0374 4.05063 16.1839 3.90412C16.3304 3.7576 16.5291 3.67529 16.7363 3.67529H20.6426C20.8498 3.67529 21.0485 3.7576 21.195 3.90412C21.3415 4.05063 21.4238 4.24934 21.4238 4.45654V20.0815H22.2051C22.4123 20.0815 22.611 20.1639 22.7575 20.3104C22.904 20.4569 22.9863 20.6556 22.9863 20.8628Z"
                    fill="#003049"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-supremint-blue">
                  Scalability & Growth
                </h3>
                <p className="text-supremint-blue text-sm leading-relaxed">
                  AI adapts to your business needs, allowing you to scale
                  efficiently without increasing workload or costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                Our Process
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-supremint-blue">
                Our Simple and Scalable Process
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                We design, develop, and implement automation tools that help you
                work smarter, not harder
              </p>
            </div>
          </div>

          {/* Process Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Step 1: Smart Analyzing */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-medium">Smart Analyzing</h3>
                  <p className="text-white/90 leading-relaxed">
                    We assess your needs and identify AI solutions to streamline
                    workflows and improve efficiency.
                  </p>
                </div>

                {/* Analysis Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="flex justify-between items-start h-full">
                    {/* Left: Radar Chart */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative w-24 h-24">
                        {/* Concentric circles */}
                        <div className="absolute inset-0 border border-gray-400 rounded-full opacity-20"></div>
                        <div className="absolute inset-3 border border-gray-400 rounded-full opacity-20"></div>
                        <div className="absolute inset-6 border border-gray-400 rounded-full opacity-20"></div>
                        {/* Radar sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-supremint-red/30 to-transparent rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-supremint-blue text-xs text-center">
                        Analyzing current workflow..
                      </p>
                    </div>

                    {/* Right: Checklist */}
                    <div className="flex-1 ml-6 space-y-2">
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg
                          className="w-3 h-3 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-supremint-blue">
                          System check
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg
                          className="w-3 h-3 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-supremint-blue">
                          Process check
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg
                          className="w-3 h-3 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-supremint-blue">Speed check</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg
                          className="w-3 h-3 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-supremint-blue">Manual work</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg
                          className="w-3 h-3 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-supremint-blue">
                          Repetitive tasks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: AI Development */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-medium">AI Development</h3>
                  <p className="text-white/90 leading-relaxed">
                    Our team builds intelligent automation systems tailored to
                    your business processes.
                  </p>
                </div>

                {/* Code Editor Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="bg-supremint-blue/20 rounded p-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-supremint-blue">
                        automation_script.py
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-supremint-blue/30 rounded"></div>
                        <div className="w-3 h-3 bg-supremint-blue/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="text-supremint-blue">
                      <span className="text-supremint-red">def</span>{" "}
                      check_trigger(self, value):
                    </div>
                    <div className="text-supremint-blue ml-4">
                      self.threshold = threshold
                    </div>
                    <div className="text-supremint-blue ml-4">
                      self.status = &quot;inactive&quot;
                    </div>
                    <div className="text-supremint-blue ml-4">
                      if value &gt; self.threshold:
                    </div>
                    <div className="text-supremint-blue ml-8">
                      self.status = &quot;active&quot;
                    </div>
                    <div className="text-supremint-blue ml-8">
                      return &quot;Automation triggered!&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Seamless Integration */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-medium">Seamless Integration</h3>
                  <p className="text-white/90 leading-relaxed">
                    We smoothly integrate AI solutions into your existing
                    infrastructure with minimal disruption.
                  </p>
                </div>

                {/* Integration Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="flex items-center justify-between h-full">
                    {/* Our Solution */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-12 h-12">
                        <div className="w-full h-full rounded-lg bg-gray-300 shadow-lg"></div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/851492e1d614a859d0241e6ab3526bd740113a0d?width=93"
                          alt="Supremint Logo"
                          className="absolute inset-1 w-10 h-5"
                        />
                      </div>
                      <p className="text-supremint-blue text-xs">
                        Our solution
                      </p>
                    </div>

                    {/* Connection Lines */}
                    <div className="flex-1 flex flex-col items-center space-y-2">
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                    </div>

                    {/* Your Stack */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-supremint-blue rounded p-2 flex items-center justify-center">
                        <div className="w-full h-full bg-white/20 rounded"></div>
                      </div>
                      <p className="text-supremint-blue text-xs">Your stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Continuous Optimization */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 4
                  </div>
                  <h3 className="text-2xl font-medium">
                    Continuous Optimization
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    We refine performance, analyze insights, and enhance
                    automation for long-term growth.
                  </p>
                </div>

                {/* Optimization Dashboard */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">
                            Chatbot system
                          </div>
                          <div className="text-supremint-blue/70">
                            Efficiency will increase by 20%
                          </div>
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-supremint-red"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">
                            Workflow system
                          </div>
                          <div className="text-supremint-blue/70">
                            Update available..
                          </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-supremint-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">
                            Sales system
                          </div>
                          <div className="text-supremint-blue/70">
                            Up to date
                          </div>
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray/80 rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                Pricing
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-supremint-blue">
                The Best AI Automation, at the Right Price
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl mb-8">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                Choose a plan that fits your business needs and start automating
                with AI
              </p>
            </div>

            {/* Monthly/Annually Toggle */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-supremint-blue text-base font-medium">
                Monthly
              </span>
              <div className="relative">
                <div className="w-16 h-8 bg-supremint-blue rounded-full p-1 cursor-pointer">
                  <div className="w-6 h-6 bg-white rounded-full shadow-md transform translate-x-8 transition-transform"></div>
                </div>
              </div>
              <span className="text-supremint-blue text-base font-medium">
                Annually
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-supremint-gray rounded-lg p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded">
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.95119 19.446C9.51076 20.4089 8.04103 22.655 3.91115 22.655C3.70395 22.655 3.50523 22.5727 3.35872 22.4262C3.21221 22.2797 3.1299 22.081 3.1299 21.8738C3.1299 17.7439 5.37599 16.2742 6.33888 15.8337C6.43224 15.7912 6.53308 15.7674 6.63563 15.7638C6.73817 15.7602 6.84043 15.7768 6.93655 15.8127C7.03267 15.8486 7.12078 15.9031 7.19585 15.9731C7.27091 16.043 7.33146 16.1271 7.37404 16.2205C7.41661 16.3138 7.44039 16.4146 7.44399 16.5172C7.4476 16.6197 7.43098 16.722 7.39507 16.8181C7.35916 16.9142 7.30466 17.0024 7.2347 17.0774C7.16474 17.1525 7.08068 17.213 6.98732 17.2556C6.35939 17.5417 4.97365 18.4626 4.72951 21.0554C7.32228 20.8113 8.24513 19.4255 8.52931 18.7976C8.57189 18.7042 8.63244 18.6202 8.7075 18.5502C8.78257 18.4803 8.87067 18.4258 8.9668 18.3899C9.06292 18.3539 9.16517 18.3373 9.26772 18.3409C9.37027 18.3445 9.47111 18.3683 9.56447 18.4109C9.65783 18.4535 9.74189 18.514 9.81185 18.5891C9.88181 18.6641 9.9363 18.7522 9.97221 18.8484C10.0081 18.9445 10.0248 19.0467 10.0211 19.1493C10.0175 19.2518 9.99376 19.3527 9.95119 19.446ZM21.8652 5.38354C21.8421 5.00261 21.6803 4.64332 21.4105 4.37346C21.1406 4.10361 20.7813 3.94185 20.4004 3.9187C19.1719 3.84545 16.0322 3.95776 13.4277 6.56225L8.59865 11.3953C8.52612 11.4679 8.44 11.5256 8.3452 11.5649C8.2504 11.6043 8.14877 11.6246 8.04611 11.6247C7.8388 11.6249 7.6399 11.5427 7.49318 11.3962C7.34645 11.2498 7.26392 11.051 7.26374 10.8437C7.26356 10.6364 7.34574 10.4375 7.4922 10.2908L10.086 7.69604C10.1403 7.64142 10.1772 7.57196 10.1921 7.4964C10.2071 7.42085 10.1993 7.34256 10.1699 7.27138C10.1405 7.20021 10.0907 7.13932 10.0267 7.09638C9.96279 7.05343 9.88758 7.03035 9.81056 7.03002H7.26564C7.05982 7.02894 6.85583 7.06879 6.66555 7.14725C6.47527 7.22571 6.30248 7.34122 6.15724 7.48706L2.80763 10.8386C2.60221 11.0439 2.45806 11.3024 2.39137 11.585C2.32468 11.8677 2.33808 12.1633 2.43006 12.4388C2.52205 12.7142 2.68899 12.9586 2.91214 13.1445C3.13529 13.3303 3.40582 13.4503 3.69337 13.491L7.45021 14.0154L11.7676 18.3328L12.292 22.0915C12.3323 22.3791 12.4523 22.6497 12.6383 22.8726C12.8244 23.0956 13.069 23.2621 13.3447 23.3533C13.5053 23.4069 13.6735 23.4343 13.8428 23.4343C14.0478 23.4347 14.2508 23.3945 14.4402 23.3161C14.6296 23.2376 14.8016 23.1225 14.9463 22.9773L18.2979 19.6277C18.4433 19.4821 18.5585 19.3093 18.6369 19.1191C18.7154 18.9289 18.7554 18.725 18.7549 18.5193V15.9744C18.7548 15.8971 18.7317 15.8217 18.6888 15.7575C18.6458 15.6934 18.5847 15.6434 18.5133 15.614C18.442 15.5845 18.3635 15.5768 18.2877 15.592C18.212 15.6071 18.1425 15.6443 18.0879 15.699L15.4932 18.2927C15.4173 18.3687 15.3266 18.4282 15.2266 18.4675C15.1267 18.5069 15.0198 18.5252 14.9125 18.5213C14.8052 18.5175 14.6998 18.4915 14.603 18.4452C14.5061 18.3988 14.4199 18.3329 14.3496 18.2517C14.2215 18.0967 14.1564 17.8991 14.1672 17.6983C14.1781 17.4974 14.2641 17.308 14.4082 17.1677L19.2197 12.3562C21.8262 9.75073 21.9385 6.61108 21.8652 5.38159V5.38354Z"
                        fill="#003049"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-supremint-blue">
                    Starter
                  </h3>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-medium text-supremint-blue">
                    $37<span className="text-base font-normal">/month</span>
                  </div>
                </div>

                <p className="text-supremint-blue text-sm leading-relaxed">
                  Perfect for small businesses starting with AI automation.
                </p>
              </div>

              <button className="w-full bg-supremint-blue text-white py-3 px-4 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors">
                Choose this plan
              </button>

              <div className="space-y-4">
                <div className="text-supremint-blue font-medium text-sm">
                  What's Included:
                </div>
                <div className="space-y-3">
                  {[
                    "Basic workflow automation",
                    "AI-powered personal assistant",
                    "Standard analytics & reporting",
                    "Email & chat support",
                    "Up to 3 AI integrations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-supremint-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-supremint-blue text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-supremint-gray rounded-lg p-8 space-y-8 relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5488 13.0317L10.6113 24.7505C10.4954 24.8742 10.3424 24.9568 10.1754 24.9859C10.0084 25.015 9.83647 24.9891 9.68554 24.9119C9.53462 24.8347 9.41288 24.7105 9.33871 24.5581C9.26455 24.4057 9.24197 24.2333 9.27439 24.0669L10.706 16.9058L5.0781 14.7925C4.95723 14.7473 4.84944 14.6728 4.76437 14.5758C4.67929 14.4787 4.61958 14.3622 4.59056 14.2364C4.56155 14.1107 4.56413 13.9797 4.59808 13.8552C4.63203 13.7307 4.69629 13.6165 4.78513 13.5229L15.7226 1.80419C15.8385 1.6805 15.9915 1.59786 16.1585 1.56874C16.3255 1.53962 16.4975 1.56561 16.6484 1.64279C16.7993 1.71996 16.921 1.84413 16.9952 1.99656C17.0694 2.14898 17.092 2.3214 17.0595 2.48779L15.624 9.65673L21.2519 11.7671C21.3719 11.8126 21.4788 11.887 21.5632 11.9836C21.6476 12.0803 21.707 12.1962 21.7359 12.3212C21.7649 12.4462 21.7626 12.5764 21.7293 12.7004C21.696 12.8243 21.6326 12.9381 21.5449 13.0317H21.5488Z"
                          fill="#003049"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-supremint-blue">
                      Professional
                    </h3>
                  </div>
                  <div className="bg-supremint-blue text-white px-3 py-1 rounded-md text-xs font-medium">
                    Popular
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-medium text-supremint-blue">
                    $75<span className="text-base font-normal">/month</span>
                  </div>
                </div>

                <p className="text-supremint-blue text-sm leading-relaxed">
                  Perfect for small businesses starting with AI automation.
                </p>
              </div>

              <button className="w-full bg-supremint-blue text-white py-3 px-4 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors">
                Choose this plan
              </button>

              <div className="space-y-4">
                <div className="text-supremint-blue font-medium text-sm">
                  What's Included:
                </div>
                <div className="space-y-3">
                  {[
                    "Advanced workflow automation",
                    "AI-driven sales & marketing tools",
                    "Enhanced data analytics & insights",
                    "Priority customer support",
                    "Up to 10 AI integrations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-supremint-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-supremint-blue text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-supremint-gray rounded-lg p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.748 9.64803C23.748 9.65877 23.748 9.66854 23.7412 9.67928L21.5263 19.8228C21.4581 20.18 21.2675 20.5022 20.9873 20.734C20.7071 20.9657 20.3548 21.0925 19.9912 21.0924H5.67768C5.31422 21.0922 4.96217 20.9654 4.68215 20.7337C4.40213 20.5019 4.21165 20.1799 4.1435 19.8228L1.92866 9.67928C1.92866 9.66854 1.92377 9.65877 1.92182 9.64803C1.8612 9.31219 1.9122 8.96574 2.06703 8.66161C2.22185 8.35749 2.47199 8.11242 2.77922 7.96384C3.08644 7.81527 3.43386 7.77136 3.76839 7.83883C4.10292 7.9063 4.40616 8.08144 4.63178 8.33748L7.91987 11.8814L11.416 4.04061C11.4161 4.03735 11.4161 4.03409 11.416 4.03084C11.541 3.7597 11.7411 3.53005 11.9925 3.36908C12.244 3.20811 12.5363 3.12256 12.8349 3.12256C13.1335 3.12256 13.4258 3.20811 13.6773 3.36908C13.9288 3.53005 14.1288 3.7597 14.2539 4.03084C14.2537 4.03409 14.2537 4.03735 14.2539 4.04061L17.7499 11.8814L21.038 8.33748C21.2641 8.08334 21.567 7.90991 21.9006 7.84354C22.2342 7.77718 22.5804 7.82149 22.8865 7.96975C23.1926 8.11802 23.442 8.36213 23.5968 8.66503C23.7516 8.96793 23.8033 9.31307 23.7441 9.64803H23.748Z"
                        fill="#003049"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-supremint-blue">
                    Enterprise
                  </h3>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-medium text-supremint-blue">
                    Custom
                  </div>
                </div>

                <p className="text-supremint-blue text-sm leading-relaxed">
                  Perfect for small businesses starting with AI automation.
                </p>
              </div>

              <button className="w-full bg-supremint-blue/10 text-supremint-blue py-3 px-4 rounded-md font-medium text-sm hover:bg-supremint-blue/20 transition-colors">
                Schedule A Call
              </button>

              <div className="space-y-4">
                <div className="text-supremint-blue font-medium text-sm">
                  What's Included:
                </div>
                <div className="space-y-3">
                  {[
                    "Fully customizable AI automation",
                    "Dedicated AI business consultant",
                    "Enterprise-grade compliance",
                    "24/7 VIP support",
                    "Unlimited AI integrations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-supremint-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-supremint-blue text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                FAQs
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-supremint-blue">
                We've Got the Answers You're Looking For
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl mb-8">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                Quick answers to your AI automation questions.
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 - What is AI automation? */}
            <div className="bg-white/5 rounded-lg border border-gray-200/10">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => {
                  const content = document.getElementById("faq-1-content");
                  const icon = document.getElementById("faq-1-icon");
                  if (content && icon) {
                    const isOpen = content.style.display !== "none";
                    content.style.display = isOpen ? "none" : "block";
                    icon.style.transform = isOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                  }
                }}
              >
                <span className="text-supremint-blue font-medium text-base">
                  What is AI automation?
                </span>
                <svg
                  id="faq-1-icon"
                  className="w-4 h-4 text-supremint-blue transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.1848 6.92222L8.49731 11.6097C8.43199 11.6753 8.35437 11.7273 8.26891 11.7628C8.18344 11.7983 8.09181 11.8165 7.99927 11.8165C7.90673 11.8165 7.81509 11.7983 7.72963 11.7628C7.64416 11.7273 7.56654 11.6753 7.50122 11.6097L2.81372 6.92222C2.68163 6.79013 2.60742 6.61097 2.60742 6.42417C2.60742 6.23737 2.68163 6.05821 2.81372 5.92612C2.94581 5.79403 3.12496 5.71982 3.31177 5.71982C3.49857 5.71982 3.67772 5.79403 3.80981 5.92612L7.99985 10.1162L12.1899 5.92554C12.322 5.79345 12.5011 5.71924 12.6879 5.71924C12.8747 5.71924 13.0539 5.79345 13.186 5.92554C13.3181 6.05763 13.3923 6.23678 13.3923 6.42358C13.3923 6.61039 13.3181 6.78954 13.186 6.92163L13.1848 6.92222Z" />
                </svg>
              </button>
              <div
                id="faq-1-content"
                className="px-5 pb-5"
                style={{ display: "none" }}
              >
                <p className="text-supremint-blue text-sm leading-relaxed">
                  AI automation uses smart technology to handle tasks that used
                  to require human effort, from answering customer questions to
                  managing your books. It's like having a tireless digital
                  assistant that works 24/7 to make your business more
                  efficient.
                </p>
              </div>
            </div>

            {/* FAQ 2 - How will this help my business? */}
            <div className="bg-white/5 rounded-lg border border-gray-200/10">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => {
                  const content = document.getElementById("faq-2-content");
                  const icon = document.getElementById("faq-2-icon");
                  if (content && icon) {
                    const isOpen = content.style.display !== "none";
                    content.style.display = isOpen ? "none" : "block";
                    icon.style.transform = isOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                  }
                }}
              >
                <span className="text-supremint-blue font-medium text-base">
                  How will this help my business?
                </span>
                <svg
                  id="faq-2-icon"
                  className="w-4 h-4 text-supremint-blue transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.1848 6.92222L8.49731 11.6097C8.43199 11.6753 8.35437 11.7273 8.26891 11.7628C8.18344 11.7983 8.09181 11.8165 7.99927 11.8165C7.90673 11.8165 7.81509 11.7983 7.72963 11.7628C7.64416 11.7273 7.56654 11.6753 7.50122 11.6097L2.81372 6.92222C2.68163 6.79013 2.60742 6.61097 2.60742 6.42417C2.60742 6.23737 2.68163 6.05821 2.81372 5.92612C2.94581 5.79403 3.12496 5.71982 3.31177 5.71982C3.49857 5.71982 3.67772 5.79403 3.80981 5.92612L7.99985 10.1162L12.1899 5.92554C12.322 5.79345 12.5011 5.71924 12.6879 5.71924C12.8747 5.71924 13.0539 5.79345 13.186 5.92554C13.3181 6.05763 13.3923 6.23678 13.3923 6.42358C13.3923 6.61039 13.3181 6.78954 13.186 6.92163L13.1848 6.92222Z" />
                </svg>
              </button>
              <div
                id="faq-2-content"
                className="px-5 pb-5"
                style={{ display: "none" }}
              >
                <p className="text-supremint-blue text-sm leading-relaxed">
                  AI automation streamlines your operations, reduces manual
                  work, and improves efficiency. This means cost savings, faster
                  turnaround times, and more consistent service delivery for
                  your customers.
                </p>
              </div>
            </div>

            {/* FAQ 3 - Is it secure? */}
            <div className="bg-white/5 rounded-lg border border-gray-200/10">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => {
                  const content = document.getElementById("faq-3-content");
                  const icon = document.getElementById("faq-3-icon");
                  if (content && icon) {
                    const isOpen = content.style.display !== "none";
                    content.style.display = isOpen ? "none" : "block";
                    icon.style.transform = isOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                  }
                }}
              >
                <span className="text-supremint-blue font-medium text-base">
                  Is it secure?
                </span>
                <svg
                  id="faq-3-icon"
                  className="w-4 h-4 text-supremint-blue transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.1848 6.92222L8.49731 11.6097C8.43199 11.6753 8.35437 11.7273 8.26891 11.7628C8.18344 11.7983 8.09181 11.8165 7.99927 11.8165C7.90673 11.8165 7.81509 11.7983 7.72963 11.7628C7.64416 11.7273 7.56654 11.6753 7.50122 11.6097L2.81372 6.92222C2.68163 6.79013 2.60742 6.61097 2.60742 6.42417C2.60742 6.23737 2.68163 6.05821 2.81372 5.92612C2.94581 5.79403 3.12496 5.71982 3.31177 5.71982C3.49857 5.71982 3.67772 5.79403 3.80981 5.92612L7.99985 10.1162L12.1899 5.92554C12.322 5.79345 12.5011 5.71924 12.6879 5.71924C12.8747 5.71924 13.0539 5.79345 13.186 5.92554C13.3181 6.05763 13.3923 6.23678 13.3923 6.42358C13.3923 6.61039 13.3181 6.78954 13.186 6.92163L13.1848 6.92222Z" />
                </svg>
              </button>
              <div
                id="faq-3-content"
                className="px-5 pb-5"
                style={{ display: "none" }}
              >
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Yes, security is our top priority. We implement
                  enterprise-grade security measures, including data encryption,
                  secure API connections, and compliance with industry standards
                  to protect your business data.
                </p>
              </div>
            </div>

            {/* FAQ 4 - Do I need technical knowledge? */}
            <div className="bg-white/5 rounded-lg border border-gray-200/10">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => {
                  const content = document.getElementById("faq-4-content");
                  const icon = document.getElementById("faq-4-icon");
                  if (content && icon) {
                    const isOpen = content.style.display !== "none";
                    content.style.display = isOpen ? "none" : "block";
                    icon.style.transform = isOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                  }
                }}
              >
                <span className="text-supremint-blue font-medium text-base">
                  Do I need technical knowledge to use AI automation?
                </span>
                <svg
                  id="faq-4-icon"
                  className="w-4 h-4 text-supremint-blue transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.1848 6.92222L8.49731 11.6097C8.43199 11.6753 8.35437 11.7273 8.26891 11.7628C8.18344 11.7983 8.09181 11.8165 7.99927 11.8165C7.90673 11.8165 7.81509 11.7983 7.72963 11.7628C7.64416 11.7273 7.56654 11.6753 7.50122 11.6097L2.81372 6.92222C2.68163 6.79013 2.60742 6.61097 2.60742 6.42417C2.60742 6.23737 2.68163 6.05821 2.81372 5.92612C2.94581 5.79403 3.12496 5.71982 3.31177 5.71982C3.49857 5.71982 3.67772 5.79403 3.80981 5.92612L7.99985 10.1162L12.1899 5.92554C12.322 5.79345 12.5011 5.71924 12.6879 5.71924C12.8747 5.71924 13.0539 5.79345 13.186 5.92554C13.3181 6.05763 13.3923 6.23678 13.3923 6.42358C13.3923 6.61039 13.3181 6.78954 13.186 6.92163L13.1848 6.92222Z" />
                </svg>
              </button>
              <div
                id="faq-4-content"
                className="px-5 pb-5"
                style={{ display: "none" }}
              >
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Not at all! Our AI automation solutions are designed to be
                  user-friendly and intuitive. We handle all the technical setup
                  and provide comprehensive training and support to ensure you
                  can use the systems effectively.
                </p>
              </div>
            </div>

            {/* FAQ 5 - How do I get started? */}
            <div className="bg-white/5 rounded-lg border border-gray-200/10">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => {
                  const content = document.getElementById("faq-5-content");
                  const icon = document.getElementById("faq-5-icon");
                  if (content && icon) {
                    const isOpen = content.style.display !== "none";
                    content.style.display = isOpen ? "none" : "block";
                    icon.style.transform = isOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                  }
                }}
              >
                <span className="text-supremint-blue font-medium text-base">
                  How do I get started?
                </span>
                <svg
                  id="faq-5-icon"
                  className="w-4 h-4 text-supremint-blue transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.1848 6.92222L8.49731 11.6097C8.43199 11.6753 8.35437 11.7273 8.26891 11.7628C8.18344 11.7983 8.09181 11.8165 7.99927 11.8165C7.90673 11.8165 7.81509 11.7983 7.72963 11.7628C7.64416 11.7273 7.56654 11.6753 7.50122 11.6097L2.81372 6.92222C2.68163 6.79013 2.60742 6.61097 2.60742 6.42417C2.60742 6.23737 2.68163 6.05821 2.81372 5.92612C2.94581 5.79403 3.12496 5.71982 3.31177 5.71982C3.49857 5.71982 3.67772 5.79403 3.80981 5.92612L7.99985 10.1162L12.1899 5.92554C12.322 5.79345 12.5011 5.71924 12.6879 5.71924C12.8747 5.71924 13.0539 5.79345 13.186 5.92554C13.3181 6.05763 13.3923 6.23678 13.3923 6.42358C13.3923 6.61039 13.3181 6.78954 13.186 6.92163L13.1848 6.92222Z" />
                </svg>
              </button>
              <div
                id="faq-5-content"
                className="px-5 pb-5"
                style={{ display: "none" }}
              >
                <p className="text-supremint-blue text-sm leading-relaxed">
                  Simply book a free consultation call with our team. We'll
                  discuss your business needs, identify automation
                  opportunities, and create a customized plan to get you started
                  with AI automation.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto mt-16 bg-supremint-blue rounded-xl p-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Book a Call Today and Start Automating
            </p>
            <button className="bg-supremint-red text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-red-600 transition-colors inline-flex items-center gap-2">
              Book a free call
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
