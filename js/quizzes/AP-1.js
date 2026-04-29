const questions = [

  // ============================================================
  // SECTION 1: VECTORS — Forces, Components, Directions, Displacement, Magnitude
  // ============================================================

  // --- North/South/East/West & Resultant ---
  {
    cat: "Vectors – Resultant Velocity",
    q: "A boat moves east with velocity 4 m/s and north with velocity 3 m/s. The resultant velocity is:",
    opts: ["5 m/s", "6 m/s", "7 m/s", "8 m/s"],
    ans: 0,
    exp: "Resultant = √(4² + 3²) = √(16 + 9) = √25 = 5 m/s. This is a classic 3-4-5 right triangle."
  },
  {
    cat: "Vectors – Resultant",
    q: "A person walks 6 m east and 8 m north. What is the magnitude of the resultant displacement?",
    opts: ["10 m", "12 m", "14 m", "7 m"],
    ans: 0,
    exp: "Resultant = √(6² + 8²) = √(36 + 64) = √100 = 10 m."
  },
  {
    cat: "Vectors – Angle & Direction",
    q: "A vector has components 3 m east and 3 m north. The angle it makes with the positive x-axis (east) is:",
    opts: ["90°", "45°", "22.5°", "30°"],
    ans: 1,
    exp: "tan θ = (north component)/(east component) = 3/3 = 1 → θ = tan⁻¹(1) = 45°."
  },
  {
    cat: "Vectors – Angle & Direction",
    q: "The angle formed by the vector (1, 1) with respect to the x-axis is:",
    opts: ["90°", "45°", "22.5°", "30°"],
    ans: 1,
    exp: "tan θ = 1/1 = 1 → θ = 45°. Both components are equal so the vector bisects the first quadrant."
  },
  {
    cat: "Vectors – Angle & Direction",
    q: "A force has an x-component of 0 N and a y-component of 5 N. The angle it makes with the positive x-axis is:",
    opts: ["0°", "45°", "90°", "180°"],
    ans: 2,
    exp: "When the x-component is 0 and y-component is positive, the vector points straight up — 90° from the x-axis."
  },
  {
    cat: "Vectors – Net Force",
    q: "Two forces of 2 N and 5 N act on a particle at the same time. The particle's net force is equal to:",
    opts: ["1 N", "7 N", "5 N", "Between 1 N and 7 N"],
    ans: 3,
    exp: "The resultant of two forces ranges from |F1 − F2| = 3 N (opposite directions) to F1 + F2 = 7 N (same direction). So it must be between 1 N (lower bound |2−5|) and 7 N."
  },
  {
    cat: "Vectors – Net Force",
    q: "Two forces of 3 N (east) and 4 N (north) act on an object. The magnitude of the resultant force is:",
    opts: ["1 N", "7 N", "5 N", "3.5 N"],
    ans: 2,
    exp: "Resultant = √(3² + 4²) = √(9 + 16) = √25 = 5 N."
  },
  {
    cat: "Vectors – Net Force",
    q: "A force of 10 N acts east and another force of 10 N acts west on the same object. The net force is:",
    opts: ["20 N east", "20 N west", "0 N", "10 N"],
    ans: 2,
    exp: "Equal forces in exactly opposite directions cancel out. Net force = 10 − 10 = 0 N."
  },

  // --- Position Vector & Displacement ---
  {
    cat: "Vectors – Position Vector",
    q: "In a rectangular coordinate system, a particle's position is (3, 2, 5). Its position vector is:",
    opts: ["3i + 5j + 2k", "3i + 2j + 5k", "5i + 3j + 2k", "None of the mentioned"],
    ans: 1,
    exp: "A position vector is written as xi + yj + zk. For (3, 2, 5), it is 3i + 2j + 5k."
  },
  {
    cat: "Vectors – Displacement",
    q: "The displacement vector of a particle when it travels from point P(2,3,5) to Q(3,4,5) is:",
    opts: ["i + j + 10k", "i + j + 5k", "i + j", "2i + 4j + 6k"],
    ans: 2,
    exp: "Displacement = Q − P = (3−2)i + (4−3)j + (5−5)k = i + j + 0k = i + j."
  },
  {
    cat: "Vectors – Displacement",
    q: "A particle moves from point A(1, 2, 3) to point B(4, 6, 3). What is the displacement vector?",
    opts: ["3i + 4j + 0k", "3i + 4j + 6k", "5i + 8j + 6k", "i + 2j + 3k"],
    ans: 0,
    exp: "Displacement = B − A = (4−1)i + (6−2)j + (3−3)k = 3i + 4j + 0k."
  },
  {
    cat: "Vectors – Displacement",
    q: "A particle starts at position (0, 0) and ends at (5, 12). The magnitude of displacement is:",
    opts: ["10 m", "13 m", "17 m", "7 m"],
    ans: 1,
    exp: "Magnitude = √(5² + 12²) = √(25 + 144) = √169 = 13 m."
  },
  {
    cat: "Vectors – Displacement",
    q: "Displacement is defined as:",
    opts: ["Total path length travelled", "Final position minus initial position", "Speed multiplied by time", "The average of all position vectors"],
    ans: 1,
    exp: "Displacement = final position vector − initial position vector. It is a vector quantity and does not depend on the path taken."
  },

  // --- Vector Components ---
  {
    cat: "Vectors – Components",
    q: "A force of 10 N acts at 30° above the horizontal. Its horizontal component is:",
    opts: ["5 N", "8.66 N", "10 N", "2.5 N"],
    ans: 1,
    exp: "Horizontal component = F cos θ = 10 × cos 30° = 10 × (√3/2) ≈ 8.66 N."
  },
  {
    cat: "Vectors – Components",
    q: "A force of 10 N acts at 30° above the horizontal. Its vertical component is:",
    opts: ["8.66 N", "5 N", "10 N", "2.5 N"],
    ans: 1,
    exp: "Vertical component = F sin θ = 10 × sin 30° = 10 × 0.5 = 5 N."
  },
  {
    cat: "Vectors – Components",
    q: "A vector <strong>A</strong> = 4i − 3j. What is the magnitude of <strong>A</strong>?",
    opts: ["1", "5", "7", "√7"],
    ans: 1,
    exp: "|A| = √(4² + (−3)²) = √(16 + 9) = √25 = 5."
  },
  {
    cat: "Vectors – Magnitude",
    q: "Vector <strong>A</strong> = 2i + 2j + 1k. The magnitude of <strong>A</strong> is:",
    opts: ["3", "5", "√5", "√9"],
    ans: 0,
    exp: "|A| = √(2² + 2² + 1²) = √(4 + 4 + 1) = √9 = 3."
  },
  {
    cat: "Vectors – Magnitude",
    q: "If vector <strong>B</strong> = 0i + 0j + 7k, the magnitude of <strong>B</strong> is:",
    opts: ["0", "7", "√7", "49"],
    ans: 1,
    exp: "|B| = √(0² + 0² + 7²) = √49 = 7. The vector points entirely in the z-direction."
  },
  {
    cat: "Vectors – Dot Product Application",
    q: "Vectors <strong>A</strong> = 2i + 3j and <strong>B</strong> = 4i − j. The dot product <strong>A · B</strong> is:",
    opts: ["5", "11", "8", "3"],
    ans: 0,
    exp: "A · B = (2)(4) + (3)(−1) = 8 − 3 = 5."
  },
  {
    cat: "Vectors – Unit Vector",
    q: "A vector starts at point (1, −1, −2) and ends at point (2, −1, 0). The displacement vector is:",
    opts: ["i + 0j + 2k", "i − 2j − 2k", "−i + 0j − 2k", "2i − j + 0k"],
    ans: 0,
    exp: "Displacement = (2−1)i + (−1−(−1))j + (0−(−2))k = 1i + 0j + 2k."
  },

  // ============================================================
  // SECTION 2: ELECTRIC FIELD, COULOMB'S LAW, ELECTRIC DIPOLE MOMENT
  // ============================================================

  {
    cat: "Coulomb's Law",
    q: "Coulomb's Law gives the force between two point charges q₁ and q₂ separated by distance r as:",
    opts: ["F = kq₁q₂r", "F = kq₁q₂/r", "F = kq₁q₂/r²", "F = kq₁q₂/r³"],
    ans: 2,
    exp: "Coulomb's Law: F = k|q₁q₂|/r². The force is inversely proportional to the square of the distance between the charges."
  },
  {
    cat: "Coulomb's Law",
    q: "Two charges of +3 μC and −3 μC are located 20 cm apart. The electrostatic force between them is:",
    opts: ["Repulsive", "Attractive", "Zero", "Perpendicular to the line joining them"],
    ans: 1,
    exp: "Opposite charges (one positive, one negative) attract each other. The force is directed along the line joining the two charges."
  },
  {
    cat: "Coulomb's Law",
    q: "If the charge on both particles is doubled and the distance between them is also doubled, the electrostatic force:",
    opts: ["Stays the same", "Doubles", "Halves", "Quadruples"],
    ans: 0,
    exp: "F = k(2q₁)(2q₂)/(2r)² = k(4q₁q₂)/(4r²) = kq₁q₂/r². The force remains unchanged."
  },
  {
    cat: "Coulomb's Law",
    q: "The value of Coulomb's constant k is approximately:",
    opts: ["8.99 × 10⁹ N·m²/C²", "6.67 × 10⁻¹¹ N·m²/C²", "1.6 × 10⁻¹⁹ N·m²/C²", "9.11 × 10⁻³¹ N·m²/C²"],
    ans: 0,
    exp: "k = 1/(4πε₀) ≈ 8.99 × 10⁹ N·m²/C². The other values are G (gravitational constant), elementary charge, and electron mass respectively."
  },
  {
    cat: "Coulomb's Law",
    q: "The principle of superposition for electric forces states that:",
    opts: ["Only the strongest force acts on a charge", "The net force equals the product of individual forces", "The net force is the vector sum of all individual forces", "Forces between charges cancel in groups of three"],
    ans: 2,
    exp: "Superposition: when multiple charges exert forces on a test charge, the net force is the vector sum of all the individual Coulomb forces."
  },

  // --- Electric Field ---
  {
    cat: "Electric Field",
    q: "The electric field <strong>E</strong> at a point is defined as:",
    opts: ["E = F × q₀", "E = F / q₀", "E = q₀ / F", "E = F + q₀"],
    ans: 1,
    exp: "Electric field E = F/q₀, where F is the force on a small positive test charge q₀ placed at that point. E has units of N/C."
  },
  {
    cat: "Electric Field",
    q: "The electric field due to a positive point charge at a distance r points:",
    opts: ["Toward the charge", "Away from the charge", "Perpendicular to r", "In the direction of increasing r²"],
    ans: 1,
    exp: "A positive test charge placed near a positive source charge is repelled — so the field points away (radially outward) from the positive charge."
  },
  {
    cat: "Electric Field",
    q: "Two charges qA = +3 μC and qB = −3 μC are 20 cm apart. At the midpoint O between them, the electric fields due to each charge:",
    opts: ["Cancel each other out", "Point in opposite directions and cancel", "Both point from A toward B, and add up", "Both point away from the midpoint"],
    ans: 2,
    exp: "At the midpoint, qA (+) creates a field pointing away from A (toward B), and qB (−) creates a field pointing toward B (also toward B). Both fields point the same direction and add."
  },
  {
    cat: "Electric Field",
    q: "The SI unit of the electric field is:",
    opts: ["Coulomb (C)", "Newton (N)", "N/C or V/m", "Joule (J)"],
    ans: 2,
    exp: "Electric field E = F/q has units of N/C, which is equivalent to V/m (volts per meter)."
  },
  {
    cat: "Electric Field",
    q: "Electric field lines for a single positive charge:",
    opts: ["Form closed loops around the charge", "Radiate outward in all directions", "Point toward the charge", "Are horizontal lines"],
    ans: 1,
    exp: "For an isolated positive point charge, field lines radiate outward symmetrically in all directions from the charge."
  },
  {
    cat: "Electric Field – Charged Ring",
    q: "For a uniformly charged ring, the electric field at a point on the central axis due to perpendicular components of all charge elements:",
    opts: ["Add constructively", "Cancel by symmetry", "Double in magnitude", "Are zero individually"],
    ans: 1,
    exp: "By symmetry, every charge element on the ring has an opposite element. Their perpendicular (radial) field components are equal and opposite, so they cancel. Only the axial components survive."
  },
  {
    cat: "Electric Field – Charged Disk",
    q: "For a uniformly charged disk, the electric field on the central axis is found by:",
    opts: ["Integrating point charge fields directly", "Treating the disk as a single point charge", "Summing contributions from many thin charged rings", "Using only Gauss's Law"],
    ans: 2,
    exp: "The disk is divided into thin concentric rings. The field from each ring on the axis is known, and integrating over all rings gives the total field from the disk."
  },
  {
    cat: "Electric Field – Applications",
    q: "In Millikan's oil-drop experiment, the electric field was used to:",
    opts: ["Accelerate electrons in a vacuum", "Balance gravitational force on charged oil drops to measure the elementary charge", "Create a magnetic field", "Measure the speed of light"],
    ans: 1,
    exp: "Millikan balanced the gravitational force on charged oil drops using an upward electric force (F = qE), allowing him to determine the elementary charge e ≈ 1.6 × 10⁻¹⁹ C."
  },

  // --- Electric Dipole ---
  {
    cat: "Electric Dipole",
    q: "The electric dipole moment <strong>p</strong> is defined as:",
    opts: ["p = q + d", "p = q × d (magnitude)", "p = q / d", "p = q − d"],
    ans: 1,
    exp: "The dipole moment magnitude is p = qd, where q is the magnitude of either charge and d is the separation distance. It is a vector pointing from −q to +q."
  },
  {
    cat: "Electric Dipole",
    q: "An electric dipole in a uniform electric field experiences:",
    opts: ["A net force and a net torque", "A net force but no torque", "A net torque but no net force", "Neither force nor torque"],
    ans: 2,
    exp: "In a uniform field, the forces on +q and −q are equal and opposite so the net force is zero. However, these forces act at different points, creating a net torque that tends to align p with E."
  },
  {
    cat: "Electric Dipole",
    q: "The potential energy of a dipole is minimum (most stable) when:",
    opts: ["p is perpendicular to E", "p is antiparallel to E (θ = 180°)", "p is parallel to E (θ = 0°)", "p = 0"],
    ans: 2,
    exp: "U = −pE cos θ. This is minimized (most negative, most stable) when cos θ = 1, i.e., θ = 0° (dipole aligned with the field)."
  },
  {
    cat: "Electric Dipole",
    q: "The electric field of a dipole along its axis at large distance z varies as:",
    opts: ["1/z", "1/z²", "1/z³", "1/z⁴"],
    ans: 2,
    exp: "The dipole field on its axis is E ≈ (1/4πε₀)(2p/z³), proportional to 1/z³. It decreases faster than the 1/r² field of a monopole."
  },
  {
    cat: "Electric Dipole",
    q: "The direction of the electric dipole moment vector <strong>p</strong> is conventionally taken as:",
    opts: ["From positive charge to negative charge", "From negative charge to positive charge", "Perpendicular to the line joining the charges", "Along the external electric field"],
    ans: 1,
    exp: "By convention, the dipole moment vector p points from the negative charge (−q) to the positive charge (+q)."
  },
  {
    cat: "Electric Dipole",
    q: "The torque magnitude on a dipole of moment p in field E at angle θ is:",
    opts: ["τ = pE cos θ", "τ = pE sin θ", "τ = pE tan θ", "τ = p + E"],
    ans: 1,
    exp: "τ = |p × E| = pE sin θ. The torque is maximum when θ = 90° (dipole perpendicular to field) and zero when θ = 0° or 180° (aligned or anti-aligned)."
  },
  {
    cat: "Electric Dipole",
    q: "Which of the following correctly describes an electric dipole?",
    opts: [
      "Two equal positive charges separated by distance d",
      "Two equal negative charges separated by distance d",
      "Two equal and opposite charges (+q and −q) separated by distance d",
      "A single charge in an external electric field"
    ],
    ans: 2,
    exp: "An electric dipole consists of two charges of equal magnitude but opposite sign (+q and −q) separated by a small distance d."
  }

];
console.log(`Questions: ${questions.length}`);
