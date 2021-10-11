const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production"
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication"
          },
          children: [
            {
              name: "Worker",
              children: [
                {
                  name: "Sub Field"
                }
              ]
            }
          ]
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly"
          },
          children: [
            {
              name: "Worker"
            }
          ]
        }
      ]
    }
  ]
};

export default orgChart;
