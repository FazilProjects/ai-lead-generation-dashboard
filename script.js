function generatePlan() {
  const niche = document.getElementById("niche").value.trim();
  const service = document.getElementById("service").value.trim();
  const target = document.getElementById("target").value.trim();

  if (!niche || !service || !target) {
    alert("Please fill in all fields to generate a lead plan.");
    return;
  }

  const customerProfile = `
    Best-fit customers are ${niche} who operate in ${target}. 
    They are likely looking for ways to save time, increase qualified leads, improve customer response speed, 
    and grow their business using ${service}.
  `;

  const outreachMessage = `
    Hi, I noticed that many ${niche} are trying to get more qualified leads and improve their customer follow-up process. 
    I help businesses like yours use ${service} to save time, improve response speed, and create a more organized lead generation workflow. 
    Would you be open to a quick conversation about how this could work for your business?
  `;

  const followUp = `
    Follow-up 1: Share a short value message explaining how ${service} can help ${niche}.
    
    Follow-up 2: Mention one common problem in the industry, such as missed leads, slow replies, or manual follow-ups.
    
    Follow-up 3: Offer a simple audit or short call to understand their current lead generation process.
  `;

  const qualificationNotes = `
    Qualify each lead based on:
    1. Business type: Does the lead match the ${niche} niche?
    2. Market fit: Are they active in ${target}?
    3. Pain point: Do they need better leads, faster replies, or workflow automation?
    4. Budget potential: Can this business realistically pay for ${service}?
    5. Urgency: Are they actively trying to improve their lead generation system?
  `;

  document.getElementById("customerProfile").textContent = customerProfile;
  document.getElementById("outreachMessage").textContent = outreachMessage;
  document.getElementById("followUp").textContent = followUp;
  document.getElementById("qualificationNotes").textContent = qualificationNotes;
}
