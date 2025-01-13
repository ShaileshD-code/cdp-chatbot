const segmentDocs = require('./data/segment_docs.json');
const mParticleDocs = require('./data/mparticle_docs.json');
const lyticsDocs = require('./data/lytics_docs.json');
const zeotapDocs = require('./data/zeotap_docs.json');

// Dummy simple search function based on keyword matching
function searchDocs(question) {
    let answer = "Sorry, I couldn't find an answer to your question.";
    
    // Search logic for Segment
    if (question.toLowerCase().includes("segment")) {
        const foundDoc = segmentDocs.find(doc => question.toLowerCase().includes(doc.keyword));
        if (foundDoc) {
            answer = foundDoc.answer;
        }
    }
    
    // Search logic for mParticle
    else if (question.toLowerCase().includes("mparticle")) {
        const foundDoc = mParticleDocs.find(doc => question.toLowerCase().includes(doc.keyword));
        if (foundDoc) {
            answer = foundDoc.answer;
        }
    }
    
    // Search logic for Lytics
    else if (question.toLowerCase().includes("lytics")) {
        const foundDoc = lyticsDocs.find(doc => question.toLowerCase().includes(doc.keyword));
        if (foundDoc) {
            answer = foundDoc.answer;
        }
    }
    
    // Search logic for Zeotap
    else if (question.toLowerCase().includes("zeotap")) {
        const foundDoc = zeotapDocs.find(doc => question.toLowerCase().includes(doc.keyword));
        if (foundDoc) {
            answer = foundDoc.answer;
        }
    }
    
    return { answer }; // Ensure it's returned as an object with "answer" property
}

module.exports = { searchDocs };
