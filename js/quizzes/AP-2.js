const questions = [

  // =========================
  // SECTION 1: VECTORS & FORCE (1–20)
  // =========================

  {
    cat: "Vectors",
    q: "A boat moves east at 6 m/s and north at 8 m/s. What is the resultant velocity?",
    opts: ["10 m/s", "14 m/s", "2 m/s", "12 m/s"],
    ans: 0,
    exp: "Resultant = √(6² + 8²) = √100 = 10 m/s."
  },
  {
    cat: "Vectors",
    q: "Which of the following is a scalar quantity?",
    opts: ["Velocity", "Force", "Speed", "Electric field"],
    ans: 2,
    exp: "Speed has magnitude only, no direction."
  },
  {
    cat: "Vectors",
    q: "Displacement is defined as:",
    opts: ["Final position + Initial position", "Initial - Final", "Final - Initial", "Magnitude only"],
    ans: 2,
    exp: "Displacement = Final position - Initial position."
  },
  {
    cat: "Vectors",
    q: "A vector has components 3i + 4j. Its magnitude is:",
    opts: ["5", "7", "1", "25"],
    ans: 0,
    exp: "Magnitude = √(3² + 4²) = 5."
  },
  {
    cat: "Vectors",
    q: "A force of 10N acts at 60°. Its horizontal component is:",
    opts: ["10N", "5N", "8.66N", "2.5N"],
    ans: 1,
    exp: "Fx = F cosθ = 10 cos60 = 5N."
  },
  {
    cat: "Vectors",
    q: "If a vector points south-west, its components are:",
    opts: ["+x, +y", "-x, -y", "+x, -y", "-x, +y"],
    ans: 1,
    exp: "South = -y, West = -x."
  },
  {
    cat: "Vectors",
    q: "Two forces 5N and 12N act at right angle. Resultant is:",
    opts: ["13N", "7N", "17N", "60N"],
    ans: 0,
    exp: "√(5² + 12²) = 13N."
  },
  {
    cat: "Vectors",
    q: "Unit vector means:",
    opts: ["Magnitude zero", "Magnitude one", "Magnitude two", "No direction"],
    ans: 1,
    exp: "Unit vector always has magnitude = 1."
  },
  {
    cat: "Vectors",
    q: "Position vector of point (2, -1, 3) is:",
    opts: ["2i - j + 3k", "i + j + k", "3i - j + 2k", "2i + j + 3k"],
    ans: 0,
    exp: "Directly from coordinates."
  },
  {
    cat: "Vectors",
    q: "Angle of vector (1, √3) with x-axis is:",
    opts: ["60°", "30°", "45°", "90°"],
    ans: 0,
    exp: "tanθ = √3/1 → θ = 60°."
  },
  {
    cat: "Vectors",
    q: "Maximum resultant of two forces is:",
    opts: ["Difference", "Sum", "Zero", "Product"],
    ans: 1,
    exp: "Maximum when both act in same direction."
  },
  {
    cat: "Vectors",
    q: "Minimum resultant of two forces is:",
    opts: ["Sum", "Difference", "Zero always", "Product"],
    ans: 1,
    exp: "Minimum when opposite → |F1 - F2|."
  },
  {
    cat: "Vectors",
    q: "Displacement from (1,2,3) to (4,6,3) is:",
    opts: ["3i + 4j", "4i + 6j", "3i + 4j + 3k", "i + j"],
    ans: 0,
    exp: "(4-1)i + (6-2)j + (3-3)k = 3i + 4j."
  },
  {
    cat: "Vectors",
    q: "A vector with zero magnitude is called:",
    opts: ["Unit vector", "Null vector", "Equal vector", "Free vector"],
    ans: 1,
    exp: "Zero magnitude = null vector."
  },
  {
    cat: "Vectors",
    q: "Which operation gives a scalar result?",
    opts: ["Cross product", "Dot product", "Vector addition", "Unit vector"],
    ans: 1,
    exp: "Dot product gives scalar."
  },
  {
    cat: "Vectors",
    q: "Projection of 5i + 2j on y-axis is:",
    opts: ["5", "2", "7", "0"],
    ans: 1,
    exp: "y-component = 2."
  },
  {
    cat: "Vectors",
    q: "If Fx = 6N and Fy = 8N, total force is:",
    opts: ["14N", "10N", "2N", "48N"],
    ans: 1,
    exp: "√(6² + 8²) = 10N."
  },
  {
    cat: "Vectors",
    q: "Angle between identical vectors is:",
    opts: ["0°", "90°", "45°", "180°"],
    ans: 0,
    exp: "Same direction → 0°."
  },
  {
    cat: "Vectors",
    q: "If displacement is zero, motion is:",
    opts: ["Circular", "Oscillatory", "Closed path", "Linear"],
    ans: 2,
    exp: "Returning to start → closed path."
  },
  {
    cat: "Vectors",
    q: "Magnitude of vector is always:",
    opts: ["Negative", "Positive", "Zero only", "Complex"],
    ans: 1,
    exp: "Magnitude cannot be negative."
  },

  // =========================
  // SECTION 2: ELECTRIC FIELD (21–40)
  // =========================

  {
    cat: "Electric Field",
    q: "Electric field is defined as:",
    opts: ["Force × charge", "Force / charge", "Charge / force", "Energy / charge"],
    ans: 1,
    exp: "E = F/q."
  },
  {
    cat: "Electric Field",
    q: "Unit of electric field is:",
    opts: ["Newton", "Coulomb", "Volt/meter", "Joule"],
    ans: 2,
    exp: "Standard unit is V/m."
  },
  {
    cat: "Electric Field",
    q: "Direction of electric field due to positive charge:",
    opts: ["Towards charge", "Circular", "Away from charge", "Random"],
    ans: 2,
    exp: "Field lines go outward."
  },
  {
    cat: "Electric Field",
    q: "Coulomb’s law states force is proportional to:",
    opts: ["1/r", "r²", "1/r²", "r"],
    ans: 2,
    exp: "F ∝ 1/r²."
  },
  {
    cat: "Electric Field",
    q: "Electric field inside hollow conductor is:",
    opts: ["Maximum", "Zero", "Infinite", "Variable"],
    ans: 1,
    exp: "No charge inside → field zero."
  },
  {
    cat: "Electric Field",
    q: "Electric field is a:",
    opts: ["Scalar", "Vector", "Tensor", "Constant"],
    ans: 1,
    exp: "Has magnitude and direction."
  },
  {
    cat: "Electric Field",
    q: "Force between like charges is:",
    opts: ["Attractive", "Repulsive", "Zero", "Infinite"],
    ans: 1,
    exp: "Same charges repel."
  },
  {
    cat: "Electric Field",
    q: "Force between unlike charges is:",
    opts: ["Repulsive", "Zero", "Attractive", "Infinite"],
    ans: 2,
    exp: "Opposite charges attract."
  },
  {
    cat: "Electric Field",
    q: "Electric field lines never:",
    opts: ["Start", "End", "Intersect", "Curve"],
    ans: 2,
    exp: "They never cross."
  },
  {
    cat: "Electric Field",
    q: "Density of field lines shows:",
    opts: ["Charge", "Distance", "Field strength", "Mass"],
    ans: 2,
    exp: "Closer lines = stronger field."
  },
  {
    cat: "Electric Field",
    q: "Electric dipole consists of:",
    opts: ["Two same charges", "Two opposite charges", "One charge", "Three charges"],
    ans: 1,
    exp: "Equal and opposite charges."
  },
  {
    cat: "Electric Field",
    q: "Dipole moment depends on:",
    opts: ["q only", "d only", "q × d", "q/d"],
    ans: 2,
    exp: "p = q × d."
  },
  {
    cat: "Electric Field",
    q: "Electric field decreases with distance as:",
    opts: ["1/r", "r²", "1/r²", "constant"],
    ans: 2,
    exp: "Inverse square law."
  },
  {
    cat: "Electric Field",
    q: "Force on charge in electric field is:",
    opts: ["F = qE", "F = E/q", "F = q/E", "F = q²"],
    ans: 0,
    exp: "Basic formula."
  },
  {
    cat: "Electric Field",
    q: "If charge is negative, force direction is:",
    opts: ["Same as field", "Opposite to field", "Random", "Zero"],
    ans: 1,
    exp: "Opposite direction."
  },
  {
    cat: "Electric Field",
    q: "At midpoint of equal opposite charges, field is:",
    opts: ["Zero", "Maximum", "Infinite", "Minimum"],
    ans: 1,
    exp: "Fields add."
  },
  {
    cat: "Electric Field",
    q: "At midpoint of equal like charges, field is:",
    opts: ["Maximum", "Zero", "Infinite", "Constant"],
    ans: 1,
    exp: "Fields cancel."
  },
  {
    cat: "Electric Field",
    q: "Electric field lines start from:",
    opts: ["Negative", "Positive", "Neutral", "Ground"],
    ans: 1,
    exp: "Always from positive."
  },
  {
    cat: "Electric Field",
    q: "Torque on dipole depends on:",
    opts: ["Only charge", "Only distance", "p × E", "q/E"],
    ans: 2,
    exp: "Torque = p × E."
  },
  {
    cat: "Electric Field",
    q: "Electric potential energy of dipole is:",
    opts: ["Scalar", "Vector", "Zero", "Infinite"],
    ans: 0,
    exp: "Energy is scalar."
  }

];