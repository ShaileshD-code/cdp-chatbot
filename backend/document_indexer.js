const segmentDocs = require('./data/segment_docs.json');
const mParticleDocs = require('./data/mparticle_docs.json');
const lyticsDocs = require('./data/lytics_docs.json');
const zeotapDocs = require('./data/zeotap_docs.json');

// Dummy simple search function based on keyword matching
function searchDocs(question) {
    let answer = "Sorry, I couldn't find an answer to your question.";
    
    // Search logic for Segment
    if (question.toLowerCase().includes("segment")) {
        answer = segmentDocs.find(doc => question.toLowerCase().includes(doc.keyword));
    }
    
    // Search logic for mParticle
    else if (question.toLowerCase().includes("mparticle")) {
        answer = mParticleDocs.find(doc => question.toLowerCase().includes(doc.keyword));
    }
    
    // Search logic for Lytics
    else if (question.toLowerCase().includes("lytics")) {
        answer = lyticsDocs.find(doc => question.toLowerCase().includes(doc.keyword));
    }
    
    // Search logic for Zeotap
    else if (question.toLowerCase().includes("zeotap")) {
        answer = zeotapDocs.find(doc => question.toLowerCase().includes(doc.keyword));
    }
    
    return answer || "Sorry, I couldn't find an answer to your question.";
}

module.exports = { searchDocs };
