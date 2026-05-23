async function testAPI() {
  console.log("Starting API Verification Tests...");

  // Test 1: GET /api/plans
  try {
    const plansResponse = await fetch('http://localhost:5000/api/plans');
    if (!plansResponse.ok) {
      throw new Error(`GET /api/plans failed with status ${plansResponse.status}`);
    }
    const plans = await plansResponse.json();
    console.log("✓ GET /api/plans returned success status.");
    console.log(`✓ Retrieved ${plans.length} plans successfully.`);
    plans.forEach(p => console.log(`  - ${p.name}: ${p.tagline}`));
  } catch (err) {
    console.error("✗ Test 1 Failed:", err.message);
  }

  // Test 2: POST /api/leads
  try {
    const leadPayload = {
      name: "Test Runner",
      email: "test@domain.com",
      company: "API Tester Inc.",
      teamSize: 45,
      selectedPlan: "Standard",
      billingCycle: "monthly",
      estimatedCost: 358.95
    };

    const leadResponse = await fetch('http://localhost:5000/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    });

    if (!leadResponse.ok) {
      throw new Error(`POST /api/leads failed with status ${leadResponse.status}`);
    }
    const result = await leadResponse.json();
    console.log("✓ POST /api/leads returned success status.");
    console.log("✓ Response message:", result.message);
    console.log("✓ Registered Lead details:", JSON.stringify(result.lead, null, 2));
  } catch (err) {
    console.error("✗ Test 2 Failed:", err.message);
  }
}

testAPI();
