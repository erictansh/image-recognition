var express = require("express");
var app = express();

app.get("/test",function(req,res){

    var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
    
    var personality_insights = new PersonalityInsightsV3({
      version: '2017-10-13',
      iam_apikey: '9nXlva0DJ2CiADEt-z1VGvJRkqCH5haGLWjpX0FXgadM',
      url: 'https://gateway.watsonplatform.net/personality-insights/api'
    });
    
    var params = {
    content: `It is no secret that the majority of papers published in journals are read by a handful of people. The authors, the reviewers (this can be subjective) and the editors. If publicised the right way, maybe double that. There are some papers which attract a lot of readership, but these are rare species in the trade. When we talk about high citations, does it mean that the articles are read? It is incredible, why do we spend so much time and effort to write a document which is only read by a handful of people? This is indeed the fascinating aspect of science.

    Why do we publish? In the universities, the key criteria for assessment and promotions remain publications in scientific journals. Higher impact factor journals are perceived to be "better" than their lower counterparts and consequently it serves as a indicator of the quality of the scientist. Among the scientific community, the papers are like the clothes that adorn you. The more, the higher impact factor, the better. For the more senior people, their names are often associated with journals as part of the editorial board (often for free) while the journals use these names to promote themselves so that more people can submit.
    
    The average paper in the materials science field is often reporting something which is known/not surprising/not novel. Yet, we do it continuously. Scientists subject themselves to a rejection probability of 50 to 90% for the average materials science journal just to get their moment of recognition in the journal eventually. This is such a puzzling behaviour, one that I have been through personally as a PhD student and also during my independent career. We get reviewed by fellow experts, although I am not sure if they really know my area. I know because of the questions that they ask. Some are downright negative. Some encouraging. Some ambivalent and trying to quickly submit their reviews. Most are not useful. Why do I need to subject myself to an unknown reviewer when I can easily email the expert in my field and seek his/her opinion on my work?
    
    Publishing has become more of a business and from a quick search, I found out that John Wiley & Sons is worth 2.68B USD. Elsevier posted a profit of more than 900M GBP. Springer-Nature has a revenue of 1.64B EUR. We are talking big business here and scientific publishing is just a fraction of their products.
    
    Do we even benefit from publishing in scientific journals? We pay money from our project funds (largely tax payers' money, ie. mine and yours) to publish in Open Access journals. More money needed for cover images, even more for special issues. And we benefit from putting our description of our breakthrough studies in a prestigious journal that "guarantees" that people in the field, people who truly matter, read it. True? I take it with a pinch of salt. With advanced search engines these days, we have stepped away from the days where we eagerly anticipate the next issue of the journal. We can "google" for what we want more information on.
    
    Writing a paper and subjecting it to review and addressing the comments of the reviews take so much time. Is the time (man hours) better spent optimising the next reaction? Should we think about how can we reduce the time spent unnecessarily working on a hopeless manuscript? A couple of months ago, I mentioned about publishing a paper in which one is proud of. This means that the data presentation is not slipshod, writing is concise and the entire paper must be useful to the community as a whole. And to publish it quickly (preprint?) and invite discussion if the community is interested.
    
    Above all, why are we doing our science if it is not for social and economic impact and benefit? More and more, I see the scientific work that results only in publications and no further follow-up as an abject failure and utter waste of the taxpayers and funding agencies' money. If a funded scientific work results only in publication, we have not only failed in the principle of funding useful science, we have also wasted many people's time. Reviewers of the grant proposals, administrators who look after the grant, students and staff who work on the project.
    
    What if every funding agency has its own repository, with technical papers, made open to public access (or charged access as per the journals)? This would allow us to reduce the middleman and allow us to focus our time more on science and doing the really useful things.
    
    What if we assess promotions and performance on the things that matter? Is the technology used in a commercial setting? Has the technology been licensed? Does anyone care about the technology? By not focusing on the volume of publications, we allow the scientists to look at the things that really matter. Funding agencies need to rethink their mode of assessment of funded work.
    
    Do we totally stop publishing completely? No, we cannot. We can do one or two really good, detailed papers, published quickly but not necessarily focusing on the trendy high impact factor journals. Aim to publish 1 good paper and not 100 ordinary generated papers.
    
    We must make the publishers work for us and not us for them. Our collective scientific efforts must be strong enough to try to solve some of the global challenges that we are facing. Not to work on increasing the volume of useless papers that no one reads.
    `,
      content_type: 'text/plain',
      consumption_preferences: true,
      raw_scores: true
    };
    
    personality_insights.profile(params, function(error, response) {
      if (error)
        console.log('Error:', error);
      else
        console.log(JSON.stringify(response, null, 2));
      }
    );
    
})

var listener = app.listen(process.env.PORT || 4000, process.env.IP, function(){
    console.log("server has started");
    console.log('Listening on port ' + listener.address().port);
});
    