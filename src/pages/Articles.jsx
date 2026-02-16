import React from "react";
import { MdArrowForward, MdArticle, MdHistory } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import CategoryChips from "../components/CategoryChips";
import ArticleCard from "../components/ArticleCard";
import UpdateItem from "../components/UpdateItem";
import NewsletterCTA from "../components/NewsletterCTA";

const Articles = () => {
  const articles = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPNsEqKZdqZl62d0C3rsHz_z-ZAVhW6ZMA1Eg1k6ijZXA8NWpG1N-6oe-YZBFiyY3fwbV0hBsrtz4QjsmOePHdkufDx35h5kWY4VZjJ5RYXMjLzKOC4yFmwGYNK7XE5fHKQw0aynleSJzuJSucNBE58eY02N0SUqURuFrpIKeDNnmGuRNjJPnxnRDM62GLKT-XhXQ_6bzSdFm7AdfGPTInPMgwLuVVE4mgaMjX50lxJ3JdaVpboePs6xiuEjxrDPz3P2JLzv-8pamR",
      category: "Research",
      title: "Diplomatic Practices for Organisational & National Economic Sustainability ",
      author: "Dr. Oyewole O. Sarumi ",
      date: "Nov 11, 2023",
      excerpt:
        "An in-depth analysis of How Diplomatic Efforts Contribute To Organizational And National Economic Sustainability.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCB-P5mB2NWV3riTO8KCwjnwEXwPEhTJuVwAHMPzXqPSHH2uyVdCO7Mj-Po_kHCpITrCV6F7r11U0rQqN5KEOTIfBZt2C32hZjxgfektrwThsTm3H6dWWaqkfRdqe5QSa6aGdTNv4KJuLcOIitiXwUE1bg8VMW7Wfib0itLFhLTsEvyY-Czd1F3Ipzp8YG_ioi7MoHWwVzEKouLFiA-VU6u4FbyDGjM_YuimZC6DImpr0RlrVhlWOifeL5D0ALlGXQOjBHswsyswK8I",
      category: "Research Paper",
      title: "THE DYNAMICS OF LEADERSHIP THROUGH DIPLOMACY IN THE FACE OF ECONOMIC AND ORGANIZATIONAL CHALLENGES ",
      author: "Dr. Oyewole O. Sarumi",
      date: "Nov 05, 2024",
      excerpt:
        "Defining diplomacy, leadership, diplomatic leadership, economic and organisational challenges.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6C-pYNGE33KNqC7zRkSwlWb19qJwBzf4i_plAEnKBUewvCv2q4H7hEP2MSsLah8dEW-QHF1hBBJ1y3sJKMNqRNcrdsSEX-NUHtlesOBhaIh6JHoO2O1A5ALpw4ayZhJYoEgYbfcIzM40zKJbadM5g5GlrWQFq0SkHzXfMCZrX8CU3qNMRFTICdBQo6-6GC7pU9qMmLCqW-CB0Loj-bvTpj2oRq6fKkPr--VXsX6QaRMeFDGxHK5zIU9HqwC7kAQGa0kVsN76pbajG",
      category: "Article",
      title: "Exploring Diplomatic Option in Practicing Essential Skills in Management",
      author: "Dr. Essien Akpanuko",
      date: "Nov 20, 2024",
      excerpt:
        "Announcing the launch of a comprehensive program aimed at enhancing public diplomacy education and practice in Africa.",
    },
  ];

  const articleUpdates = [
    {
      isOfficial: true,
      icon: "article",
      iconBg: "bg-blue-50   text-primary",
      type: "Featured Article",
      badgeClass: "text-primary bg-primary/10",
      date: "Oct 10",
      title: "Public Diplomacy in the 21st Century",
      description:
        "A comprehensive review of evolving diplomatic strategies in contemporary geopolitics.",
      buttonText: "Read Article",
    },
    {
      isOfficial: false,
      icon: "library_books",
      iconBg: "bg-slate-50   text-slate-700  ",
      type: "Publication",
      badgeClass: "text-slate-600   bg-slate-100  ",
      date: "Oct 08",
      title: "Annual Report on Diplomatic Engagements",
      description:
        "Highlights from the year's diplomatic activities and achievements.",
      buttonText: "Download Report",
    },
    {
      isOfficial: false,
      icon: "school",
      iconBg: "bg-slate-50   text-slate-700  ",
      type: "Research Paper",
      badgeClass: "text-slate-600   bg-slate-100  ",
      date: "Oct 05",
      title: "Cultural Exchange Programs: Impact Assessment",
      description:
        "Evaluating the effectiveness of cultural diplomacy initiatives worldwide.",
      buttonText: "View Paper",
    },
  ];

  return (
    <div
      id="articles"
      className=" pt-10 bg-background-light   font-display text-slate-900   antialiased overflow-x-hidden"
    >
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-10 px-4 md:px-8 lg:px-40">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
              <SectionHeader
                title="Articles & Publications"
                description="Explore our latest articles, research papers, and publications on public diplomacy and international relations."
              />
              <CategoryChips />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900   ">
                      Latest Articles
                    </h3>
                    <a
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                      href="#"
                    >
                      View All <MdArrowForward className="text-sm" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                      <ArticleCard key={index} article={article} />
                    ))}
                    <div className="flex flex-col items-center justify-center gap-4 bg-slate-50  /50 rounded-xl p-8 border-2 border-dashed border-slate-200   text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MdArticle />
                      </div>
                      <div>
                        <h4 className="text-slate-900    text-lg font-bold">
                          Stay Informed
                        </h4>
                        <p className="text-slate-500   text-sm mt-1">
                          Subscribe to get notified about new articles and
                          publications.
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
                    <h3 className="text-xl font-bold text-slate-900   ">
                      Recent Publications
                    </h3>
                    <a
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                      href="#"
                    >
                      Archive <MdHistory className="text-sm" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-4">
                    {articleUpdates.map((update, index) => (
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

export default Articles;
