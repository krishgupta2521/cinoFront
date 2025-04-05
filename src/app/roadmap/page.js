"use client";
import React, { useState, useEffect } from "react";

const RoadmapPage = () => {
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    const roadmapId = localStorage.getItem("generatedRoadmapId");
    if (roadmapId) {
      const fetchRoadmap = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `http://localhost:5000/api/roadmaps/${roadmapId}`
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || "Failed to fetch roadmap details"
            );
          }
          const data = await response.json();
          setRoadmapData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchRoadmap();
    } else {
      setError("Roadmap ID not found in local storage.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (roadmapData?.description) {
      const parsedPhases = [];
      const descriptionParts = roadmapData.description.split(
        /### Phase\s+(\d+):(.+?)(?=(### Phase|$))/s
      );

      for (let i = 1; i < descriptionParts.length; i += 3) {
        const phaseNumber = descriptionParts[i]?.trim();
        const phaseTitle = descriptionParts[i + 1]?.trim();
        const phaseContent = descriptionParts[i + 2]?.trim();

        if (phaseNumber && phaseTitle && phaseContent) {
          parsedPhases.push({
            number: phaseNumber,
            title: phaseTitle,
            steps: phaseContent
              .split("\n\n")
              .filter((item) => item.trim() !== ""),
          });
        } else {
          parsedPhases.push({
            title: "Overview",
            steps: roadmapData.description
              .split("\n\n")
              .filter((item) => item.trim() !== ""),
          });
          break;
        }
      }
      setPhases(parsedPhases);
    }
  }, [roadmapData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!roadmapData) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Roadmap Not Found
          </h2>
          <p className="text-gray-600">No roadmap data available.</p>
        </div>
      </div>
    );
  }

  const renderStepWithBold = (step) => {
    return step.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="bg-purple-50 min-h-screen py-10">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          {roadmapData.title || "Personalized Learning Roadmap"}
        </h1>

        {phases.length > 0 ? (
          phases.map((phase, index) => (
            <div
              key={index}
              className="mb-8 p-6 rounded-lg shadow-md border border-purple-200 bg-purple-100"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-4">
                {phase.number ? `Phase ${phase.number}:` : ""} {phase.title}
              </h2>
              <div className="space-y-4">
                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="p-4 rounded-lg bg-white shadow-sm border border-gray-200"
                  >
                    <p
                      className="text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: renderStepWithBold(step),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div
            className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{
              __html: roadmapData.description.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RoadmapPage;
