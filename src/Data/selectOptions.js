const selectOptions = {
  originalSet: [
    { value: "engagement", label: "Engagement" },
    { value: "enrollment", label: "Enrollment" },
    { value: "retention", label: "Retention" },
    { value: "student_success", label: "Student Success" },
    { value: "strategic_planning", label: "Strategic Planning" }
  ],
  feedbackCycle: [
    { value: "", label: "" },
    { value: "2013-2014", label: "2013-2014" },
    { value: "2014-2015", label: "2014-2015" },
    { value: "2015-2016", label: "2015-2016" },
    { value: "2016-2017", label: "2016-2017" },
    { value: "2017-2018", label: "2017-2018" },
    { value: "2018-2019", label: "2018-2019" },
    { value: "2019-2020", label: "2019-2020" },
    { value: "2029-2021", label: "2020-2021" }
  ],
  outcomesReview: [
    { value: "", label: "" },
    {
      value: "1",
      label: "1 - No Outcomes Have Been Defined"
    },
    {
      value: "2",
      label: "2 - Outcomes Need Major Re-work"
    },
    {
      value: "3",
      label: "3 - Outcomes Need Minor Edits"
    },
    {
      value: "4",
      label: "4 - Outcomes Are Well Defined"
    }
  ],
  methodReview: [
    { value: "", label: "" },
    {
      value: "1",
      label: "1 - No Assessment Methods Have Been Defined"
    },
    {
      value: "2",
      label: "2 - Assessment Methods Need Major Re-work"
    },
    {
      value: "3",
      label: "3 - Assessment Methods Need Minor Edits"
    },
    {
      value: "4",
      label: "4 - Assessment Methods Are Well Defined"
    }
  ],
  resultsReview: [
    { value: "", label: "" },
    {
      value: "1",
      label: "1 - No Assessment Results Have Been Defined"
    },
    {
      value: "2",
      label: "2 - Assessment Results Need Major Re-work"
    },
    {
      value: "3",
      label: "3 - Assessment Results Need Minor Edits"
    },
    {
      value: "4",
      label: "4 - Assessment Results Are Well Defined"
    }
  ],
  overallReview: [
    { value: "", label: "" },
    {
      value: "1",
      label: "1 - No Assessment Report is Available"
    },
    {
      value: "2",
      label: "2 - Assessment Report Need Major Re-work"
    },
    {
      value: "3",
      label: "3 - Assessment Report Need Minor Edits"
    },
    {
      value: "4",
      label: "4 - Assessment Report is Complete"
    }
  ]
};

export default selectOptions;
