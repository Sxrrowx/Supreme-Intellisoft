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
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
              <div className="w-full lg:w-96 h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-t from-transparent to-black/20 rounded-xl"></div>
              </div>
              <div className="flex-1 space-y-6">
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
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-20">
              <div className="w-full lg:w-96 h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c827f90cd784978224d5bb08a71f5e324bfd3ebd?width=700"
                  alt="AI Assistant Interface"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 space-y-6">
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
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
              <div className="w-full lg:w-96 h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8827b5fd553280d0cfe2ea38fe53fbcd7a3b2c?width=700"
                  alt="Sales & Marketing Interface"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 space-y-6">
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
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-20">
              <div className="w-full lg:w-96 h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center relative overflow-hidden">
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
              <div className="flex-1 space-y-6">
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
    </div>
  );
}
