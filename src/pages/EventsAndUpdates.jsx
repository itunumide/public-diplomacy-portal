import React from "react";
import { MdArrowForward, MdHistory, MdEventAvailable } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import CategoryChips from "../components/CategoryChips";
import EventCard from "../components/EventCard";
import UpdateItem from "../components/UpdateItem";
import NewsletterCTA from "../components/NewsletterCTA";

const EventsAndUpdates = () => {
  const events = [
    {
      month: "Oct",
      day: "12",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPNsEqKZdqZl62d0C3rsHz_z-ZAVhW6ZMA1Eg1k6ijZXA8NWpG1N-6oe-YZBFiyY3fwbV0hBsrtz4QjsmOePHdkufDx35h5kWY4VZjJ5RYXMjLzKOC4yFmwGYNK7XE5fHKQw0aynleSJzuJSucNBE58eY02N0SUqURuFrpIKeDNnmGuRNjJPnxnRDM62GLKT-XhXQ_6bzSdFm7AdfGPTInPMgwLuVVE4mgaMjX50lxJ3JdaVpboePs6xiuEjxrDPz3P2JLzv-8pamR",
      type: "Conference",
      title: "Annual Diplomacy Summit 2024",
      locationIcon: "location_on",
      location: "Abuja, Nigeria",
      time: "09:00 AM",
      description:
        "Join industry leaders for our flagship summit discussing the future of public diplomacy and international relations strategies.",
    },
    {
      month: "Nov",
      day: "05",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCB-P5mB2NWV3riTO8KCwjnwEXwPEhTJuVwAHMPzXqPSHH2uyVdCO7Mj-Po_kHCpITrCV6F7r11U0rQqN5KEOTIfBZt2C32hZjxgfektrwThsTm3H6dWWaqkfRdqe5QSa6aGdTNv4KJuLcOIitiXwUE1bg8VMW7Wfib0itLFhLTsEvyY-Czd1F3Ipzp8YG_ioi7MoHWwVzEKouLFiA-VU6u4FbyDGjM_YuimZC6DImpr0RlrVhlWOifeL5D0ALlGXQOjBHswsyswK8I",
      type: "Workshop",
      title: "Public Speaking for Diplomats",
      locationIcon: "videocam",
      location: "Virtual Event",
      time: "02:00 PM",
      description:
        "A comprehensive interactive workshop designed to enhance communication skills for aspiring and seasoned diplomats.",
    },
    {
      month: "Nov",
      day: "20",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6C-pYNGE33KNqC7zRkSwlWb19qJwBzf4i_plAEnKBUewvCv2q4H7hEP2MSsLah8dEW-QHF1hBBJ1y3sJKMNqRNcrdsSEX-NUHtlesOBhaIh6JHoO2O1A5ALpw4ayZhJYoEgYbfcIzM40zKJbadM5g5GlrWQFq0SkHzXfMCZrX8CU3qNMRFTICdBQo6-6GC7pU9qMmLCqW-CB0Loj-bvTpj2oRq6fKkPr--VXsX6QaRMeFDGxHK5zIU9HqwC7kAQGa0kVsN76pbajG",
      type: "Seminar",
      title: "International Relations Seminar",
      locationIcon: "location_on",
      location: "Lagos, Nigeria",
      time: "10:30 AM",
      description:
        "An in-depth seminar exploring contemporary issues in international relations, trade policy, and cross-border cooperation.",
    },
  ];

  const updates = [
    {
      isOfficial: true,
      icon: "verified_user",
      iconBg: "bg-blue-50 dark:bg-blue-900/30 text-primary",
      type: "Official Notice",
      badgeClass: "text-primary bg-primary/10",
      date: "Oct 10",
      title: "New Certification Requirements for 2025",
      description:
        "The Institute has updated the curriculum standards for the upcoming academic year.",
      buttonText: "Read Notice",
    },
    {
      isOfficial: false,
      icon: "handshake",
      iconBg:
        "bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
      type: "Press Release",
      badgeClass:
        "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700",
      date: "Oct 08",
      title: "Partnership with Ministry of Foreign Affairs",
      description:
        "Strategic partnership aimed at fostering stronger diplomatic ties across the region.",
      buttonText: "Read Release",
    },
    {
      isOfficial: false,
      icon: "school",
      iconBg:
        "bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
      type: "Academic",
      badgeClass:
        "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700",
      date: "Oct 05",
      title: "Call for Papers: Journal of Public Diplomacy",
      description:
        "Submissions are now open for the Winter 2024 edition of our academic journal.",
      buttonText: "View Guidelines",
    },
  ];

  return (
   
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 justify-center py-10 px-4 md:px-8 lg:px-40">
              <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
                <SectionHeader
                  title="Events & Updates"
                  description="Stay informed with the latest conferences, workshops, and official institutional announcements."
                />
                <CategoryChips
                  categories={[
                    { name: "All", active: true },
                    { name: "Conferences", active: false },
                    { name: "Seminars", active: false },
                    { name: "Press Releases", active: false },
                    { name: "Workshops", active: false },
                  ]}
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Upcoming Events
                      </h3>
                      <a
                        className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                        href="#"
                      >
                        View Calendar <MdArrowForward className="text-sm" />
                      </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                      ))}
                      <div className="flex flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border-2 border-dashed border-slate-200 dark:border-slate-700 text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <MdEventAvailable />
                        </div>
                        <div>
                          <h4 className="text-slate-900 dark:text-white text-lg font-bold">
                            Don't Miss Out
                          </h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Subscribe to get notified about new events and
                            workshops.
                          </p>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-white text-sm font-medium h-9 px-4 rounded-lg transition-colors">
                          Subscribe to Updates
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Institutional Updates
                      </h3>
                      <a
                        className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                        href="#"
                      >
                        Archive <MdHistory className="text-sm" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-4">
                      {updates.map((update, index) => (
                        <UpdateItem key={index} update={update} />
                      ))}
                    </div>
                    <NewsletterCTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default EventsAndUpdates;
